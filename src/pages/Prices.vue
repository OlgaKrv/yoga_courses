<template>
	<div class="wrapper_content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="wrapper_prices">
					<img
						src="../assets/prices_yoga_girl.png"
						class="absolute block -right-20"
						alt="prices_yoga_girl"
					/>
					<div class="prices w-full h-screen">
						<div class="page_title">Стоимость абонементов</div>
						<div class="prices_content">
							<div
								v-for="activityType in activityTypes"
								:key="activityType.id"
								@mouseover="activityType.selected = true"
								@mouseleave="activityType.selected = false"
								class="activity_type_item"
								:class="{
									'w-2/5': activityType.selected,
									'h-72': activityType.selected,
									'bg-amber-400': activityType.selected,
								}"
							>
								<div class="activity_type_title">
									{{ activityType.typeTitle }}
								</div>
								<div
									v-if="activityType.selected"
									class="activity_type_description h-40"
								>
									{{ activityType.typeDescription }}
								</div>
								<div class="flex items-center justify-between">
									<div
										class="activity_type_price"
										:class="{ 'text-white': activityType.selected }"
									>
										{{ activityType.typePrice }}
									</div>
									<button v-if="activityType.selected" class="record_button">
										Записаться
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedActivityType: false,
			activityTypes: [
				{
					id: 1,
					typeTitle: 'Безлимитный на 1 месяц',
					typePrice: '5 900 ₽',
					selected: false,
					typeDescription:
						'Безлимитный абонемент позволяет посещать групповые занятия неограниченное количество раз в течение 1 месяца.',
				},
				{
					id: 2,
					typeTitle: '3 месяца',
					typePrice: '3 900 ₽',
					selected: false,
					typeDescription:
						'Безлимитный абонемент позволяет посещать групповые занятия неограниченное количество раз в течение 1 месяца.',
				},
				{
					id: 3,
					typeTitle: 'Разовое занятие',
					typePrice: '1 900 ₽',
					selected: false,
					typeDescription:
						'Безлимитный абонемент позволяет посещать групповые занятия неограниченное количество раз в течение 1 месяца.',
				},
				{
					id: 4,
					typeTitle: '4 занятия',
					typePrice: '1 900 ₽',
					selected: false,
					typeDescription:
						'Безлимитный абонемент позволяет посещать групповые занятия неограниченное количество раз в течение 1 месяца.',
				},
				{
					id: 5,
					typeTitle: 'Детский',
					typePrice: '2 000 ₽',
					selected: false,
					typeDescription:
						'Безлимитный абонемент позволяет посещать групповые занятия неограниченное количество раз в течение 1 месяца.',
				},
				{
					id: 6,
					typeTitle: '8 занятий',
					typePrice: '1 900 ₽',
					selected: false,
					typeDescription:
						'Безлимитный абонемент позволяет посещать групповые занятия неограниченное количество раз в течение 1 месяца.',
				},
				{
					id: 7,
					typeTitle: 'Безлимитный',
					typePrice: '4 000 ₽',
					selected: false,
					typeDescription:
						'Безлимитный абонемент позволяет посещать групповые занятия неограниченное количество раз в течение 1 месяца.',
				},
				{
					id: 8,
					typeTitle: 'Студенческий',
					typePrice: '2 000 ₽',
					selected: false,
					typeDescription:
						'Безлимитный абонемент позволяет посещать групповые занятия неограниченное количество раз в течение 1 месяца.',
				},
			],
		}
	},
}
</script>

<style>
.prices_content {
	font-family: gilroy-medium;
}
</style>
