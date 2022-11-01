import { component$, useStore, useWatch$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Buttons/Buttons";
import { send } from '@emailjs/browser';

export default component$(() => {
    const state = useStore({ name: "", email: "", msg: "", submit: false, error: "", success: false });

    useWatch$(({ track }) => {
        track(() => state.submit);
        if (state.submit == true) {
            if (state.name.length < 3) {
                state.submit = false
                state.error = "Name too short"
                return
            }
            if (state.email.length < 10) {
                state.submit = false
                state.error = "Invalid email"
                return
            }
            if (state.msg.length < 20) {
                state.submit = false
                state.error = "Message too short"
                return
            }
            if (state.success) {
                state.submit = false
                state.error = "Sie können nur eine Nachricht senden"
                return
            }
            console.log("Sending...");
            send("service_rayrawl", "template_u4inahy", { from_name: state.name, from_email: state.email, message: state.msg }, "iwt1kgfRRNytc6wrP")
                .then(() => {
                    state.submit = false
                    state.success = true
                    state.error = ""
                }, (error) => {
                    state.submit = false
                    state.error = error.text
                });
        }

    });
    return (
        <>
            <div onSubmit$={(e) => console.log(e)} className={`max-w-6xl pt-10 rounded-xl sm:mx-auto mx-5 flex flex-col gap-5 bg-back2 mt-10 p-5 m-auto animate__animated animate__fadeIn`}>
                {state.success &&
                    <div className={`bg-green-500 -mt-5 bg-opacity-50 rounded p-5 text-lg items-center animate__animated flex animate__backInDown`}>
                        <p className="flex-grow">Message was send successfully</p>
                        <a className="transition-colors rounded-lg p-1 font-semibold text-blue-300 hover:bg-white hover:bg-opacity-10 px-5" href="/">Back to Homapage</a>
                    </div>
                }
                {!state.success &&
                    <>
                        <h1 className="text-3xl">💬 Contact</h1>
                        <p className="text-gray-300">If you have any questions, feel free to send me message.</p>
                        {state.error.length ? (
                            <div className="text-red-500">{state.error}</div>
                        ) : ""}
                        <div className="w-full flex flex-col gap-5 max-w-sm">
                            <input onInput$={(event) => (state.name = (event.target as HTMLInputElement).value)} type="text" placeholder="Name" class="bg-transparent border-2 border-primary border-opacity-50 rounded" />
                            <input onInput$={(event) => (state.email = (event.target as HTMLInputElement).value)} type="email" placeholder="Email" class="bg-transparent border-2 border-primary border-opacity-50 rounded" />
                        </div>
                        <textarea onInput$={(event) => (state.msg = (event.target as HTMLInputElement).value)} placeholder="Message" class="bg-transparent border-2 border-primary border-opacity-50 rounded"></textarea>
                        <Button onClick$={() => state.submit = true} text="Send" />
                        <Button onClick$={() => state.success = true} text="Send" />
                    </>}
            </div>
        </>
    )
})

export const head: DocumentHead = {
    title: 'Contact - A-Emile',
};