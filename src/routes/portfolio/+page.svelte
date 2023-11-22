<script lang="ts">
    import {
        CodeBlock,
        TreeView,
        TreeViewItem,
        focusTrap,
    } from "@skeletonlabs/skeleton";

    import { terminal, addTerminalLine } from "../../stores/vars";
    import type { EventHandler } from "svelte/elements";

    let code = "";
    let username = "";
    let password = "";
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

    addTerminalLine("visited /portfolio");
</script>

<!-- <h1 class="h1 bg">
    <span
        class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
        >Hello, I'm Eli</span
    >
</h1> -->

<div class="flex h-screen w-screen text-white">
    <aside class="h-full bg-[#181818] border-white border-r">
        <TreeView>
            <TreeViewItem>s</TreeViewItem>
        </TreeView>
    </aside>
    <main class="flex-1 flex flex-col h-full bg-[#1f1f1f]">
        <div class="flex-3 flex h-4/5">
            <section class="flex-1 flex flex-col h-full">
                <header class="shadow-lg">login.ts</header>
                <article class="flex-1 overflow-y-scroll h-full">
                    <CodeBlock {code} buttonCopied="" />
                </article>
            </section>
            <section class="flex-1 border-l flex flex-col">
                <header class="shadow-lg">localhost:3000</header>
                <article class="flex-1 flex justify-center items-center">
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
                        <button class="btn variant-form-material w-full"
                            >Submit</button
                        >
                        <span class="label">
                            <small
                                ><a href="/portfolio">forgot password?</a
                                ></small
                            >
                        </span>
                    </form>
                </article>
            </section>
        </div>
        <footer class="flex-1 bg-[#181818] border-t p-2 h-1/5">
            {$terminal}
        </footer>
    </main>
</div>
