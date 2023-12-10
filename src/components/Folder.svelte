<script lang="ts">
    import FileItem from "./File.svelte";
    import FolderItem from "./Folder.svelte";

    interface Dir {
        name: string;
        children: Array<File | Dir>;
    }

    interface File {
        name: string;
        path: string;
    }

    export let name: string;
    export let children: Array<File | Dir>;
    export let tabs: number = 2;
    export let expanded: boolean = true;
    function toggle() {
        expanded = !expanded;
    }
</script>

<span
    aria-expanded={!!expanded}
    role="button"
    on:keypress={(e) => e.key === "Enter" && toggle()}
    tabindex="0"
    on:click={toggle}
    style={`padding-left: ${(tabs ?? 2) * 8}px;`}>{name}</span
>

{#if expanded}
    {#each children as child}
        {#if "children" in child && child.children?.length}
            <FolderItem {...child} tabs={(tabs ?? 2) + 1} />
        {:else if "path" in child}
            <FileItem {...child} tabs={(tabs ?? 2) + 1} />
        {/if}
    {/each}
{/if}

<style>
    span:hover {
        background-color: #37373d;
    }

    span::before {
        content: "";
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        width: 8px;
        height: 8px;
        display: inline-block;
        transform: rotate(-45deg);
        position: relative;
        top: -1px;
        left: -8px;
    }

    span[aria-expanded="true"]::before {
        transform: rotate(45deg);
    }
</style>
