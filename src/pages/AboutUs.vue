<template>
	<div class="wrapper_content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="wrapper_training_types">
					<div class="page_title">Мы практикуем разные виды йоги</div>
					<div class="training_types">
						<div class="first_training">
							<div class="text-3xl">Классическая хатха</div>
							<div>
								течение, которое призвано развивать тело, укреплять его,
								повышать силу и ловкость
							</div>
						</div>
						<div class="training">Дыхание</div>
						<div class="training">Йога Айенгара</div>
						<div class="training">Хатха йога. Здоровый позвоночник</div>
						<div class="training">Йога в гамаках</div>
						<div class="training">Фитнес йога</div>
					</div>
				</div>
				<div class="wrapper_training_details">
					<div class="page_title">Все продумано до мелочей</div>
					<div class="training_details">
						<!-- /* eslint-disable */ -->
						<carousel
							class="text-center"
							:perPage="1"
							:paginationEnable="false"
							:paginationColor="colorPagination"
							:paginationActiveColor="colorPaginationActive"
							:navigationEnabled="true"
							:navigationNextLabel="navigationNext"
							:navigationPrevLabel="navigationPrev"
						>
							<slide
								v-for="trainingDetailsItem in trainingDetailsItems"
								:key="trainingDetailsItem.id"
								class="training_details-item"
							>
								<div class="text-white flex items-end m-6">
									<div class="text-9xl">{{ trainingDetailsItem.id }}</div>
									<div class="text-3xl">/07</div>
								</div>
								<img
									class="rounded-3xl"
									:src="require(`../assets/${trainingDetailsItem.url}`)"
									alt="trainingDetailsItem.url"
								/>
							</slide>
						</carousel>
					</div>
				</div>
				<div class="wrapper_impressions">
					<div class="page_title">Ученики делятся впечатлениями</div>
					<div class="impressions">
						<div class="impression_item flex">
							<div
								class="impression_content"
								v-for="impressionContent in impressionContents"
								:key="impressionContent.id"
							>
								<div class="material-icons">format_quote</div>
								<div class="impression_text">{{ impressionContent.text }}</div>
								<div class="impression_author">
									{{ impressionContent.author }}
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
			colorPagination: '#b3b3b3',
			colorPaginationActive: '#030303',
			navigationNext: '❯',
			navigationPrev: '❮',
			trainingDetailsItems: [
				{ id: '01', url: '01_training_detail.png' },
				{ id: '02', url: '02_training_detail.png' },
				{ id: '03', url: '03_training_detail.png' },
				{ id: '04', url: '04_training_detail.png' },
				{ id: '05', url: '05_training_detail.png' },
				{ id: '06', url: '06_training_detail.png' },
				{ id: '07', url: '07_training_detail.png' },
			],
			impressionContents: [
				{
					id: 1,
					text: 'Очень светлая и уютная студия, до мелочей все продумано, чистота на высшем уровне, для меня это важно! Профессиональный подход, этапность подготовки в практике, качественное оборудование,видно что владелец студии заинтересован, чтобы люди могли качественно практиковать!',
					author: 'Юлия Воробьёва',
				},
				{
					id: 2,
					text: 'Сегодня в студии состоялся мастер-класс, посвященный работе стоп! Это было очень интересно и полезно! Хочется продолжения... Спасибо всем, кто пришел сегодня в студию и разделил практику.',
					author: 'Ксения Терентьева',
				},
				{
					id: 3,
					text: 'Очень светлая и уютная студия, до мелочей все продумано, чистота на высшем уровне, для меня это важно! Профессиональный подход, этапность подготовки в практике, качественное оборудование,видно что владелец студии заинтересован, чтобы люди могли качественно практиковать!',
					author: 'Юлия Воробьёва',
				},
			],
		}
	},
}
</script>

<style>
.training:nth-child(2) {
	background-image: url(../assets/breathing.png);
}
.training:nth-child(3) {
	background-image: url(../assets/Iyengar_yoga.png);
}
.training:nth-child(4) {
	background-image: url(../assets/Hatha_yoga.png);
}
.training:nth-child(5) {
	background-image: url(../assets/yoga_in_hammocks.png);
}
.training:nth-child(6) {
	background-image: url(../assets/fitness_yoga.png);
}
.training_types {
	font-family: gilroy-medium;
}
.training_types {
	height: 600px;
}
.impression_content {
	font-family: gilroy-medium;
}
</style>
