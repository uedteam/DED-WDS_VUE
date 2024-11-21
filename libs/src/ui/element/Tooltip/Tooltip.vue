<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';

// 定義 Props
const props = defineProps({
	content: {
		type: String,
		default: "",
	},
	placement: {
		type: String,
		default: "top",
		validator: value => [
			"top-left", "top", "top-right",
			"right-top", "right", "right-bottom",
			"bottom-right", "bottom", "bottom-left",
			"left-top", "left", "left-bottom"
		].includes(value)
	},
	showArrow: {
		type: Boolean,
		default: true
	},
	className: {
		type: String,
		default: "",
	},
});


const tooltipTriggerRef = ref(null);
const tooltipContentRef = ref(null);
const tooltipStyles = ref({});

// 功能 - 生成 tooltip id
const tooltipId = `tooltip-${Math.random().toString(36).substring(2, 9)}`;

// 功能 - 控制 tooltip 的顯示及隱藏
const visible = ref(false);
const showTooltip = () => {
	visible.value = true;
	nextTick(updateTooltipPosition);
};
const hideTooltip = () => {
	visible.value = false;
};

// 功能 計算位置
const updateTooltipPosition = async () => {
	if (!tooltipTriggerRef.value || !tooltipContentRef.value || !visible.value) return;

	await nextTick();

	const triggerElement = tooltipTriggerRef.value.getBoundingClientRect();
	const tooltipElement = tooltipContentRef.value.getBoundingClientRect();

	let top, left;

	switch (props.placement) {
		//-- [ top ] --//
		case 'top-right':
			top = (triggerElement.top - tooltipElement.height - 8);
			left = triggerElement.right - tooltipElement.width;
			break;
		case 'top':
			top = (triggerElement.top - tooltipElement.height - 8);
			left = triggerElement.left + (triggerElement.width / 2) - (tooltipElement.width / 2);
			break;
		case 'top-left':
			top = (triggerElement.top - tooltipElement.height - 8);
			left = triggerElement.left;
			break;

		//-- [ right ] --//
		case 'right-top':
			top = triggerElement.top;
			left = (triggerElement.right + 8);
			break;
		case 'right':
			top = triggerElement.top + (triggerElement.height / 2) - (tooltipElement.height / 2);
			left = (triggerElement.right + 8);
			break;
		case 'right-bottom':
			top = (triggerElement.bottom - tooltipElement.height);
			left = (triggerElement.right + 8);
			break;

		//-- [ bottom ] --//
		case 'bottom-right':
			top = (triggerElement.bottom + 8);
			left = triggerElement.right - tooltipElement.width;
			break;
		case 'bottom':
			top = (triggerElement.bottom + 8);
			left = triggerElement.left + (triggerElement.width / 2) - (tooltipElement.width / 2);
			break;
		case 'bottom-left':
			top = (triggerElement.bottom + 8);
			left = triggerElement.left;
			break;

		//-- [ left ] --//
		case 'left-top':
			top = triggerElement.top;
			left = (triggerElement.left - tooltipElement.width - 8);
			break;
		case 'left':
			top = triggerElement.top + (triggerElement.height / 2) - (tooltipElement.height / 2);
			left = (triggerElement.left - tooltipElement.width - 8);
			break;
		case 'left-bottom':
			top = (triggerElement.bottom - tooltipElement.height);
			left = (triggerElement.left - tooltipElement.width - 8);
			break;
	}

	tooltipStyles.value = {
		top: `${top}px`,
		left: `${left}px`,
		position: 'fixed'
	};
};

onMounted(() => {
	window.addEventListener('scroll', updateTooltipPosition);
	window.addEventListener('resize', updateTooltipPosition);
});

onBeforeUnmount(() => {
	window.removeEventListener('scroll', updateTooltipPosition);
	window.removeEventListener('resize', updateTooltipPosition);
});
</script>

<template>
	<div
		ref="tooltipTriggerRef"
		:class="{'ded-tooltip-container': true, [props.className]: !!props.className}"
		@mouseenter="showTooltip"
		@mouseleave="hideTooltip"
		:aria-describedby="tooltipId"
	>
		<slot></slot>
	</div>
	<Teleport to="body">
		<Transition name="fade">
			<div
				v-if="visible"
				:id="tooltipId"
				ref="tooltipContentRef"
				:style="tooltipStyles"
				class="ded-tooltip ded-tooltip-content"
				:class="`ded-tooltip-${props.placement}`"
			>
				{{ props.content }}
				<div
					v-if="props.showArrow"
					class="ded-tooltip-arrow"
					:class="`ded-tooltip-arrow-${props.placement}`"
				>
					<div class="ded-tooltip-arrow-shape"></div>
				</div>
			</div>
		</Transition>
	</Teleport>
</template>

<style lang="scss" scoped>

</style>