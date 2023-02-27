<template>
	<div class="wrapper_content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="navbar_content">
					<div class="page_title">Занятия для любого уровня</div>
					<div class="page_note">
						Неважно, идете вы на первое занятие или уже 10 лет практикуете йогу
						— у нас вы найдете соответствующую группу.
					</div>
				</div>
				<div class="main_content">
					<div class="visitor_category flex">
						<div
							v-if="visitorCategoryNumber == 0"
							class="visitor_category_description bg-teal-400"
						>
							<div class="visitor_category_item">Новичкам</div>
							<div class="visitor_category_block p-10">
								<div class="visitor_category_text mb-14">
									Для новичков собраны специальные группы, где обучают самым
									азам.
								</div>
								<button
									class="visitor_category_button px-10 py-2 rounded-full border-2"
								>
									Записаться
								</button>
							</div>
						</div>
						<div
							v-else
							@click="visitorCategoryNumber = 0"
							class="visitor_category-option bg-teal-400"
						>
							<div>Новичкам</div>
							<i class="material-icons">expand_more</i>
						</div>
						<div
							v-if="visitorCategoryNumber == 1"
							class="visitor_category_description bg-amber-400"
						>
							<div class="visitor_category_item">Продолжающим</div>
							<div class="visitor_category_block p-10">
								<div class="visitor_category_text mb-14">
									Для любителей йоги организованы группы, где они смогут
									оттачивать свои навыки.
								</div>
								<button
									class="visitor_category_button px-10 py-2 rounded-full border-2"
								>
									Записаться
								</button>
							</div>
						</div>
						<div
							v-else
							@click="visitorCategoryNumber = 1"
							class="visitor_category-option bg-amber-400"
						>
							<div>Продолжающим</div>
							<i class="material-icons">expand_more</i>
						</div>
						<div
							v-if="visitorCategoryNumber == 2"
							class="visitor_category_description bg-orange-500"
						>
							<div class="visitor_category_item">Профессионалам</div>
							<div class="visitor_category_block p-10">
								<div class="visitor_category_text mb-14">
									Для профессинальных йогов организованы группы, в которых они
									смогут совершенствовать свои умения.
								</div>
								<button
									class="visitor_category_button px-10 py-2 rounded-full border-2"
								>
									Записаться
								</button>
							</div>
						</div>
						<div
							v-else
							@click="visitorCategoryNumber = 2"
							class="visitor_category-option bg-orange-500"
						>
							<div>Профессионалам</div>
							<i class="material-icons">expand_more</i>
						</div>
						<div class="visitor_category_name"></div>
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
			visitorCategoryNumber: 0,
		}
	},
}
</script>

<style>
.page_title {
	font-family: phenomena;
	font-weight: bold;
	font-size: 2.5rem;
	width: 13rem;
}
.page_note {
	font-family: gilroy-medium;
	font-size: 1rem;
	width: 25rem;
}
.visitor_category_description {
	font-family: gilroy-medium;
}
.visitor_category-option {
	font-family: gilroy-bold;
	writing-mode: tb-rl;
	transform: rotate(180deg);
}
.visitor_category_item {
	writing-mode: tb-rl;
	transform: rotate(180deg);
}
.visitor_category_text {
	width: 25rem;
	font-size: 2rem;
}
button.visitor_category_button {
	font-size: 1.25rem;
}
</style>
