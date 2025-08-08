<script lang="ts">
	interface Props {
		padding?: 'sm' | 'md' | 'lg';
		shadow?: 'sm' | 'md' | 'lg';
		border?: boolean;
	}

	let {
		padding = 'md',
		shadow = 'md',
		border = false,
		...props
	}: Props = $props();

	$: classes = [
		'card',
		`card--${padding}`,
		`card--shadow-${shadow}`,
		border ? 'card--border' : ''
	].filter(Boolean).join(' ');
</script>

<div class={classes} {...props}>
	<slot />
</div>

<style>
	.card {
		background: white;
		border-radius: 0.75rem;
		overflow: hidden;
	}

	.card--sm {
		padding: 1rem;
	}

	.card--md {
		padding: 1.5rem;
	}

	.card--lg {
		padding: 2rem;
	}

	.card--shadow-sm {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}

	.card--shadow-md {
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}

	.card--shadow-lg {
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}

	.card--border {
		border: 1px solid #e5e7eb;
	}
</style>
