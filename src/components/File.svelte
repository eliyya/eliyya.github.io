<!-- ---
interface Props {
    name: string;
    path: string;
    tabs: number;
}

const { name, path, tabs } = Astro.props;
--- -->
<script lang="ts">
    export let name: string;
    export let path: string;
    export let tabs: number;
</script>

<a href={path}>
    <span style={`padding-left: ${tabs * 4 + 18}px;`}>
        {name}
    </span>
</a>

<style>
    a {
        padding-right: 0.5rem;
    }

    span {
        display: flex;
        gap: 0.25rem;

        &:hover {
            background-color: #37373d;
        }
    }
</style>
