<script lang="ts">
	import { T } from '@tolgee/svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'outline';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		keyName?: string;
		defaultValue?: string;
	}

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		type = 'button',
		keyName,
		defaultValue,
		...props
	}: Props = $props();

	$: classes = [
		'btn',
		`btn--${variant}`,
		`btn--${size}`,
		disabled ? 'btn--disabled' : ''
	].filter(Boolean).join(' ');
</script>

<button
	class={classes}
	{disabled}
	{type}
	{...props}
	on:click
	on:keydown
>
	{#if keyName}
		<T {keyName} {defaultValue} />
	{:else}
		<slot />
	{/if}
</button>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		font-weight: 500;
		transition: all 0.2s ease;
		cursor: pointer;
		border: none;
		outline: none;
	}

	.btn:focus {
		outline: 2px solid #007bff;
		outline-offset: 2px;
	}

	.btn--primary {
		background-color: #007bff;
		color: white;
	}

	.btn--primary:hover:not(.btn--disabled) {
		background-color: #0056b3;
	}

	.btn--secondary {
		background-color: #6c757d;
		color: white;
	}

	.btn--secondary:hover:not(.btn--disabled) {
		background-color: #545b62;
	}

	.btn--outline {
		background-color: transparent;
		color: #007bff;
		border: 2px solid #007bff;
	}

	.btn--outline:hover:not(.btn--disabled) {
		background-color: #007bff;
		color: white;
	}

	.btn--sm {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}

	.btn--md {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
	}

	.btn--lg {
		padding: 1rem 2rem;
		font-size: 1.125rem;
	}

	.btn--disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.btn--disabled:hover {
		transform: none;
	}
</style>
