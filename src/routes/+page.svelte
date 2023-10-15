<script lang="ts">
    import hljs from "highlight.js";
    import type { EventHandler } from "svelte/elements";
    import { CodeBlock, focusTrap } from "@skeletonlabs/skeleton";
    import typescript from "highlight.js/lib/languages/typescript";
    import { storeHighlightJs } from "@skeletonlabs/skeleton";

    import "highlight.js/styles/atom-one-dark-reasonable.css";
    import "./codeblock.css";

    hljs.registerLanguage("typescript", typescript);
    storeHighlightJs.set(hljs);

    let username = "";
    let password = "";
    let code = "";
    let isFocused = true;

    const submit: EventHandler<SubmitEvent, HTMLFormElement> = (e) => {
        window.location.href = "/portfolio";
    };

    $: code = `import { Router } from 'https://deno.land/x/oak@v12.6.0/mod.ts'
import { generateToken } from '../utils/token.ts'
import { getUser } from '../db.ts'

const router = new Router();

router
  .post("/authorize", async (ctx) => {
    // check if body exists
    if (!ctx.request.hasBody) {
      ctx.response.status = 400;
      ctx.response.body = { message: "Invalid request" };
      return;
    }

    const { user, password } = await ctx.request.body({ type: "json" }).value;
    // check the credentials
    if (user !== '${username}') {
      ctx.response.status = 400;
      ctx.response.body = { message: "Invalid credentials" };
      return;
    }
    if (password !== '${"*".repeat(password.length)}') {
      ctx.response.status = 400;
      ctx.response.body = { message: "Invalid credentials" };
      return;
    }
    
    // get the token
    const userInfo = await getUser(user)
    const token = await generateToken(userinfo)

    // return the token
    ctx.response.body = token;
  })

export default router;`;
</script>

<main class="flex flex-row w-screen h-screen overflow-hidden">
    <section
        class="flex-1 flex justify-center items-center bg-neutral-900"
        id="code"
    >
        <CodeBlock language="ts" {code} shadow="shadow-none" lineNumbers />
    </section>
    <section
        class="flex-1 flex justify-center items-center bg-[#d4d8e5]"
        id="login"
    >
        <form
            use:focusTrap={isFocused}
            class="flex flex-col gap-3"
            on:submit|preventDefault={submit}
        >
            <label class="label">
                <span>User</span>
                <input
                    bind:value={username}
                    class="input variant-form-material"
                    title="user"
                    type="text"
                    placeholder="@username"
                />
            </label>
            <label class="label">
                <span>Password</span>
                <input
                    bind:value={password}
                    class="input variant-form-material"
                    title="password"
                    type="password"
                    placeholder="********"
                />
            </label>
            <button class="btn variant-form-material w-full">Submit</button>
            <label class="label"><small>forgot password?</small></label>
        </form>
    </section>
</main>
