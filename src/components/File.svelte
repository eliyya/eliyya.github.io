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

<a href={path}><span style={`padding-left: ${tabs * 8}px;`}>{name}</span></a>

<style>
    span:hover {
        background-color: #37373d;
    }
    span {
        display: block;
    }
</style>
