<template>
	<div class="skeleton page">
		<div class="skeleton-nav">
			<a href="javascript:void(0)">***</a> |
			<a href="javascript:void(0)">***</a>
		</div>
		<div class="skeleton-wrap">
			<div class="skeleton-img"></div>
			<div class="skeleton-content"></div>
		</div>
	</div>
</template>

<style lang="scss">
.skeleton {
	text-align: center;
	color: #2c3e50;
}

.skeleton-nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;
		&:first-child {
			color: #42b983;
		}
	}
}
.skeleton-wrap {
	margin-left: 25%;
	width: 50%;
	height: calc(100% - 95px);

	.skeleton-img {
		width: 200px;
		height: 200px;
		margin-left: calc(50% - 100px);
		background: #eee;
	}

	.skeleton-content {
		background: #eee;
		margin-top: 20px;
		height: calc(100% - 350px);
	}
}
</style>
