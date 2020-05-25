import useToggleState from "../../hooks/useToggleState";

const assemblyListing = `
.text:004011E0                 push    ebp
.text:004011E1                 push    esi
.text:004011E2                 push    edi 
.text:004011E3                 push    0
.text:004011E5                 call    _time 
.text:004011EA                 mov     edi, [esp+10h+arg_8] 
.text:004011EE                 mov     ebp, [esp+10h+arg_4] 
.text:004011F2                 add     esp, 4 
.text:004011F5                 xor     esi, esi
.text:004011F7                 test    ebp, ebp 
.text:004011F9                 mov     [edi], eax 
.text:004011FB                 jle     short loc_401223
.text:004011FD                 mov     ecx, [esp+0Ch+arg_0]
.text:00401201                 push    ebx
.text:00401202                 imul    eax, 7452845h
.text:00401208                 mov     bl, [esi+ecx]
.text:0040120B                 add     eax, 2934563h
.text:00401210                 mov     edx, eax
.text:00401212                 shr     edx, 17h
.text:00401215                 xor     bl, dl
.text:00401217                 add     bl, al
.text:00401219                 mov     [edi+esi+4], bl
.text:0040121D                 inc     esi
.text:0040121E                 cmp     esi, ebp
.text:00401220                 jl      short loc_401202
.text:00401222                 pop     ebx
.text:00401223                 pop     edi
.text:00401224                 pop     esi
.text:00401225                 pop     ebp
.text:00401226                 retn
`;

const solution = `
When I'm faced with assembly code, I like to go line by line commenting out 
what the code is doing. 
 
.text:004011E0                 push    ebp
.text:004011E1                 push    esi
.text:004011E2                 push    edi // just saving registers
 
Anytime you see registers being pushed to the stack, it's always a good idea
to scroll to the end of the function and see if those values are being
restored. That's the case here and we can safely assume these registers
will be used as temporary placeholders.
 
.text:004011E3                 push    0
.text:004011E5                 call    _time // get seconds since 1970 store value in eax
 
This is where things get a little tricky and where we'll have to make some 
educated guesses. We see a function call here but we have no way to tell how 
that function is defined. There are several well known "time" functions (see msdn) 
and there's nothing to suggest this isn't defined by the program itself but what 
makes the most sense at this point is that this is the standard C implementation. 
 
More information: https://www.geeksforgeeks.org/time-function-in-c/
 
// third argument (buffer)
.text:004011EA                 mov     edi, [esp+10h+arg_8]
// second argument (plain_text length)
.text:004011EE                 mov     ebp, [esp+10h+arg_4]
// clear value passed to _time off the stack
.text:004011F2                 add     esp, 4
 
You can see from my comments that I've given the arguments data types. This 
was based on the information I gleaned from the following code listing. I suggest 
you do this as well. It helps you when you're writing your decryption algorithm.
 
Strictly speaking, at this point, the only information we can assume from these 
three lines of code are that this function takes 3 arguments (assuming each 
argument is 4 bytes long).
 
arg_0 = Argument 1
arg_4 = Argument 2
arg_8 = Argument 3
 
.text:004011F5                 xor     esi, esi // clear esi
// check if second argument is equal to 0
.text:004011F7                 test    ebp, ebp
 
Here we can see ebp(which is storing the second argument, see earlier) being 
tested against itself. This is effectively performing a logical AND operation while 
simultaneously setting the status flags SF, ZF, and PF. This also clears the carry
and overflow bits.
 
ESI is also being set to 0. 
 
// set first four bytes of buffer equal to _time(0)
.text:004011F9                 mov     [edi], eax
 
At first glace, you may feel as though EAX contains a mystery value unbeknownst
to us at this time but you have to remember that functions store their return 
values in the EAX register. 
 
This can be effectively thought of as: EAX = _time(0); *EDI = EAX;
 
.text:004011FB                 jle     short loc_401223 // exit if null
 
Here's the conditional jump based on the TEST from earlier. The compiler most
likely inserted the "mov [edi], eax" instruction before this instruction for
pipelining reasons. We'll soon learn that this function exits if a null string is
passed in as an argument.
 
.text:004011FD                 mov     ecx, [esp+0Ch+arg_0] // first arg (plain text)
 
This is loading the first argument into the ECX register. I've gone ahead and
concluded this is the plaintext string and you'll soon learn why.
 
.text:00401201                 push    ebx // saving the register
 
// From here on out, a loop begins and I'll comment the code only as needed.
 
.text:00401202                 imul    eax, 7452845h // curr_time *= 7452845h
 
.text:00401208                 mov     bl, [esi+ecx]
 
As mentioned earlier, this is inside of a loop and it's looping through all the
characters in plain_text(Argument 1). BL is holding the value of the current 
character of plain_text but we'll learn that it's actually used as a buffer for 
the encryption result. ESI was set to 0 earlier and is the "counter" while ECX
points to the first byte in plain_text. They're both incremented with every
iteration.
 
.text:0040120B                 add     eax, 2934563h // curr_time += 2934563h
 
.text:00401210                 mov     edx, eax // copy encryption key(curr_time)
 
.text:00401212                 shr     edx, 17h // shift encryption_key right by 17h
 
// xor plain_text[i] with value returned from shifted value
.text:00401215                 xor     bl, dl 
 
.text:00401217                 add     bl, al // add encryption key to plain_text[i]
 
.text:00401219                 mov     [edi+esi+4], bl

This character is now encrypted and will be stored into the buffer(3rd Argument).
 
** Notice how there's a (+4) - Earlier, we stored the return result from the call 
to _time(0) in the first four bytes of *EDI. Had this not been stored inside of the 
buffer, we'd have no way to decrypt the file without bruteforcing that value. **
 
The remaining code increments the counter and current character and checks to
see if all the characters have been iterated through. If they have, the stack is
cleaned up and the function returns to the caller otherwise the process repeats.
 
.text:0040121D                 inc     esi
.text:0040121E                 cmp     esi, ebp
.text:00401220                 jl      short loc_401202
.text:00401222                 pop     ebx
.text:00401223                 pop     edi
.text:00401224                 pop     esi
.text:00401225                 pop     ebp
.text:00401226                 retn
 
 
Now that you understand the algorithm you can grab your favorite hex editor and
a calculator and begin decrypting the binary. A better solution would be to write
a program to decrypt the binary for us. Here's a simple solution.
 
//////////////////////////////// SOLUTION IN C /////////////////////////////////
 
#include <stdio.h>
#include <string.h>
 
// These are the bytes of the binary file
unsigned char cipher_text[] = {
    0x20, 0xAE, 0xB1, 0x59, 0xC6,
    0xB0, 0xB9, 0xB5, 0x37, 0x96,
    0x81, 0x2C, 0xA6, 0x16, 0xE3,
    0x14, 0x99, 0xC8, 0xEE, 0xA0,
    0x33, 0x4E, 0xAA, 0x1A, 0x8D,
    0xE0, 0xD4, 0x90, 0xB1, 0xD7,
    0x77, 0x8B, 0xE1, 0x66, 0x10,
    0x14, 0x4B, 0xA5, 0xD4, 0x03,
    0xAC, 0xC7, 0x81, 0xD8, 0x12,
    0x4D, 0x81, 0x76, 0xA0, 0xB2,
    0x0B, 0x38, 0x48, 0xD4, 0x14,
    0xCA, 0xD1, 0x61, 0xD4, 0x0E,
    0x65, 0xA4, 0xD6, 0x14, 0xC5,
    0x64, 0x18, 0x9D
};
 
void decrypt()
{
    const int cipher_text_length = sizeof(cipher_text);
    char plain_text[cipher_text_length];
 
    // grab the encryption key from the data (the result from calling _time(0))
    int encryption_key;
    memcpy(&encryption_key, cipher_text, sizeof(int));
 
    // loop through every byte of data minus first 4 bytes(curr_time)
    for (int i = 4; i < cipher_text_length; i++) {
        // this part of the algorithm stays the same
        encryption_key *= 0x7452845;
        encryption_key += 0x2934563;
        int temp_key = encryption_key >> 0x17;
 
        // this is in reverse order from how it occurs in the encrypt function
        // so it'll be decrypted
        char c = cipher_text[i];
        c -= encryption_key;
        c ^= temp_key;
 
        printf("%c", c);
    }
}
 
int main()
{
    decrypt();
    return 0;
}
 
 
 
Here is the output:
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
`;


function Example() {
    const [isToggled, changeToggleState] = useToggleState(false);
    return (
        <div className="Example">
            <h2 className="Example-header">Example Reverse Engineering Challenge</h2>
            <p className="Example-subheader">This problem was recently asked by a government contractor hiring for a reverse engineering position.</p>
            <div className="Example-challenge">
                <p>The following binary has been encrypted using a proprietary algorithm: <a href="/weeklyreversingpro-sample-challenge.bin" target="_blank" className="Example-binary">Download Encrypted File</a></p>
                <p>Our top secret researchers have discovered that the following assembly code is responsible for the encryption but they're unable to decipher it's meaning. They've heard you're subscribed to <span className="App-strong">Weekly Reversing Pro</span> and are the foremost expert on the matter.<br /><br />... Can you decrypt the file and extract the plaintext?</p>
            </div>
            <div className="Example-code-section">
                {assemblyListing.replace(/ /g, "\u00a0").split('\n').map((line, i) => <p key={i}>{line}</p>)}
            </div>
            <div 
                className="Example-code-solution">
                <span className="Example-solution-toggle" onClick={changeToggleState}>{isToggled ? <i className="fal fa-chevron-down"></i> : <i className="fal fa-chevron-right"></i>}
                See the solution</span>
                {isToggled ? <div className="Example-solution">
                <iframe width="700" height="394" src="https://www.youtube.com/embed/3abG4g7ecbw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {solution.replace(/ /g, "\u00a0").split('\n').map((line, i) => <p key={i}>{line}</p>)}</div> 
                : ""}
            </div>
            <style jsx>{`
                .Example {
                    align-items: center;
                    background-color: #7f2b35;
                    color: #fff;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 0 5% 5% 5%;
                }

                .Example .App-strong {
                    color: #fff;
                }

                .Example-header {
                    font-size: 2rem;
                    margin: 0;
                    margin-top: 5%;
                    margin-bottom: 1%;
                    text-align: center;
                }

                .Example-subheader {
                    text-align: center;
                }

                .Example p {
                    margin: 0;
                    font-size: 1.2rem;
                    max-width: 800px;
                }

                .Example-binary {
                    color: #FBBF00;
                    text-decoration: none;
                }

                .Example-challenge {
                    margin-top: 2%;
                }

                .Example-challenge p {
                    margin-bottom: 1%;
                }

                .Example-code-section {
                    background-color: #fff;
                    border-radius: 5px;
                    color: #333;
                    margin-top: 2%;
                    padding: 25px;
                    overflow: auto;
                    max-width: 90%;
                }

                .Example-code-solution {
                    background-color: #af5262;
                    font-size: 1.4rem;
                    padding: 25px 50px;
                    margin-top: 5%;
                    width: 100%;
                    max-width: 800px;
                    overflow: auto;
                }

                .Example-solution-toggle {
                    cursor: pointer;
                }

                .Example-code-solution .fal {
                    color: #7f2b35;
                    margin-right: 25px;
                }

                .Example-solution {
                    margin-top: 5%;
                }
            `}</style>
        </div>
    );
}

export default Example;