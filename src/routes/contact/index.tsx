import { component$, useRef, useStore, useWatch$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Buttons/Buttons";
import { send } from '@emailjs/browser';


export default component$(() => {
    const state = useStore({ name: "", email: "", msg: "", submit: false, error: "", success: false });
    const form = useRef();

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
        <div ref={form} onSubmit$={(e) => console.log(e)} className={`max-w-6xl pt-10 rounded-xl flex flex-col gap-5 bg-back2 mt-10 p-5 m-auto`}>
            <h1 className="text-3xl">💬 Contact</h1>
            <p className="text-gray-300">If you have any questions, feel free to send me message.</p>
            {state.error.length ? (
                <div className="text-red-500">{state.error}</div>
            ) : ""}
            {state.success ? <p className="text-green-400">Email send successfully</p> : ""}
            <div className="w-full flex flex-col gap-5 max-w-sm">
                <input onInput$={(event) => (state.name = (event.target as HTMLInputElement).value)} type="text" placeholder="Name" class="bg-transparent border-2 border-primary border-opacity-50 rounded" />
                <input onInput$={(event) => (state.email = (event.target as HTMLInputElement).value)} type="email" placeholder="Email" class="bg-transparent border-2 border-primary border-opacity-50 rounded" />
            </div>
            <textarea onInput$={(event) => (state.msg = (event.target as HTMLInputElement).value)} placeholder="Message" class="bg-transparent border-2 border-primary border-opacity-50 rounded"></textarea>
            <Button onClick$={() => state.submit = true} text="Send" />

        </div>
    )
})

export const head: DocumentHead = {
    title: 'Contact - A-Emile',
};