<template>
	<div class="wrapper_content wrapper-content--fixed">
		<section>
			<div class="container">
				<div class="page_title">Расписание занятий</div>
				<table class="border text-2xl bg-slate-200">
					<thead>
						<tr>
							<th class="border border-slate-400"></th>
							<th
								v-for="scheduleTime in scheduleTimes"
								:key="scheduleTime.num"
								class="border border-slate-400"
							>
								{{ scheduleTime.time }}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td
								v-for="mondayClass in mondayClasses"
								:key="mondayClass.num"
								class="border border-slate-400"
								:class="mondayClass.color"
							>
								<div>{{ mondayClass.time }}</div>
								<div>{{ mondayClass.level }}</div>
								<div>{{ mondayClass.type }}</div>
							</td>
						</tr>
						<tr>
							<td
								v-for="tuesdayClass in tuesdayClasses"
								:key="tuesdayClass.num"
								class="border border-slate-400"
								:class="tuesdayClass.color"
							>
								<div>{{ tuesdayClass.time }}</div>
								<div>{{ tuesdayClass.level }}</div>
								<div>{{ tuesdayClass.type }}</div>
							</td>
						</tr>
						<tr>
							<td
								v-for="wednesdayClass in wednesdayClasses"
								:key="wednesdayClass.num"
								class="border border-slate-400"
								:class="wednesdayClass.color"
							>
								<div>{{ wednesdayClass.time }}</div>
								<div>{{ wednesdayClass.level }}</div>
								<div>{{ wednesdayClass.type }}</div>
							</td>
						</tr>
						<tr>
							<td
								v-for="thursdayClass in thursdayClasses"
								:key="thursdayClass.num"
								class="border border-slate-400"
								:class="thursdayClass.color"
							>
								<div>{{ thursdayClass.time }}</div>
								<div>{{ thursdayClass.level }}</div>
								<div>{{ thursdayClass.type }}</div>
							</td>
						</tr>
						<tr>
							<td
								v-for="fridayClass in fridayClasses"
								:key="fridayClass.num"
								class="border border-slate-400"
								:class="fridayClass.color"
							>
								<div>{{ fridayClass.time }}</div>
								<div>{{ fridayClass.level }}</div>
								<div>{{ fridayClass.type }}</div>
							</td>
						</tr>
						<tr>
							<td
								v-for="satudayClass in satudayClasses"
								:key="satudayClass.num"
								class="border border-slate-400"
								:class="satudayClass.color"
							>
								<div>{{ satudayClass.time }}</div>
								<div>{{ satudayClass.level }}</div>
								<div>{{ satudayClass.type }}</div>
							</td>
						</tr>
						<tr>
							<td
								v-for="sundayClass in sundayClasses"
								:key="sundayClass.num"
								class="border border-slate-400 w-32"
								:class="sundayClass.color"
							>
								<div>{{ sundayClass.time }}</div>
								<div>{{ sundayClass.level }}</div>
								<div>{{ sundayClass.type }}</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			scheduleTimes: [
				{ num: 1, time: '8:00' },
				{ num: 2, time: '9:00' },
				{ num: 3, time: '10:00' },
				{ num: 4, time: '11:00' },
				{ num: 5, time: '12:00' },
				{ num: 6, time: '13:00' },
				{ num: 7, time: '14:00' },
				{ num: 8, time: '15:00' },
				{ num: 9, time: '16:00' },
				{ num: 10, time: '17:00' },
				{ num: 11, time: '18:00' },
				{ num: 12, time: '19:00' },
				{ num: 13, time: '20:00' },
			],
			mondayClasses: [
				{
					num: 0,
					time: 'Понедельник',
					type: '',
					level: '',
					color: 'bg-fuchsia-500',
				},
				{ num: 1, time: '-', type: '', level: '' },
				{ num: 2, time: '-', type: '', level: '' },
				{ num: 3, time: '-', type: '', level: '' },
				{
					num: 4,
					time: '11:00-12:00',
					type: 'Латина Соло',
					level: 'Начинающие',
					color: 'bg-cyan-300',
				},
				{
					num: 5,
					time: '12:00-13:00',
					type: 'Латина Соло',
					level: 'Продолжающие',
					color: 'bg-violet-500',
				},
				{ num: 6, time: '-', type: '', level: '' },
				{ num: 7, time: '-', type: '', level: '' },
				{ num: 8, time: '-', type: '', level: '' },
				{ num: 9, time: '-', type: '', level: '' },
				{ num: 10, time: '-', type: '', level: '' },
				{
					num: 11,
					time: '18:00-19:00',
					type: 'Йога МИКС',
					level: '',
					color: 'bg-lime-400',
				},
				{
					num: 12,
					time: '19:00-20:00',
					type: 'Классическая хатха',
					level: '',
					color: 'bg-orange-400',
				},
				{
					num: 13,
					time: '20:00-21:00',
					type: 'Растяжка (stretching)',
					level: '',
					color: 'bg-fuchsia-500',
				},
			],
			tuesdayClasses: [
				{
					num: 0,
					time: 'Вторник',
					type: '',
					level: '',
					color: 'bg-cyan-300',
				},
				{ num: 1, time: '-', type: '', level: '' },
				{
					num: 2,
					time: '9:00-10:00',
					type: 'ZUMBA Fitness',
					level: '',
					color: 'bg-indigo-500',
				},
				{
					num: 3,
					time: '10:00-11:00',
					type: 'Растяжка (stretching)',
					level: '',
					color: 'bg-fuchsia-500',
				},
				{
					num: 4,
					time: '11:00-12:00',
					type: 'Оздоровительная гимнастика. Самомассаж. Цигун',
					level: '',
					color: 'bg-rose-400',
				},
				{ num: 5, time: '', type: '', level: '' },
				{ num: 6, time: '', type: '', level: '' },
				{ num: 7, time: '', type: '', level: '' },
				{ num: 8, time: '', type: '', level: '' },
				{ num: 9, time: '', type: '', level: '' },
				{ num: 10, time: '', type: '', level: '' },
				{ num: 11, time: '', type: '', level: '' },
				{
					num: 12,
					time: '19:00-20:00',
					type: 'Body',
					level: 'Full',
					color: 'bg-yellow-300',
				},
				{
					num: 13,
					time: '20:00-21:00',
					type: 'ZUMBA Fitness',
					level: '',
					color: 'bg-indigo-500',
				},
			],
			wednesdayClasses: [
				{
					num: 0,
					time: 'Среда',
					type: '',
					level: '',
					color: 'bg-yellow-300',
				},
				{ num: 1, time: '-', type: '', level: '' },
				{
					num: 2,
					time: '9:00-10:00',
					type: 'Power Core',
					level: '',
					color: 'bg-teal-400',
				},
				{
					num: 3,
					time: '10:00-11:00',
					type: 'Латина Соло',
					level: 'Начинающие',
					color: 'bg-cyan-300',
				},
				{
					num: 4,
					time: '11:00-12:00',
					type: 'Латина Соло',
					level: 'Продолжающие',
					color: 'bg-violet-500',
				},
				{ num: 5, time: '-', type: '', level: '' },
				{ num: 6, time: '-', type: '', level: '' },
				{ num: 7, time: '-', type: '', level: '' },
				{ num: 8, time: '-', type: '', level: '' },
				{
					num: 9,
					time: '16:00-17:00',
					type: 'Аренда',
					level: '',
					color: 'bg-white',
				},
				{ num: 10, time: '-', type: '', level: '' },
				{ num: 11, time: '-', type: '', level: '' },
				{
					num: 12,
					time: '19:00-20:00',
					type: 'Йога в гамаках',
					level: '',
					color: 'bg-green-400',
				},
				{
					num: 13,
					time: '20:00-21:00',
					type: 'ZUMBA Fitness',
					level: '',
					color: 'bg-indigo-500',
				},
			],
			thursdayClasses: [
				{
					num: 0,
					time: 'Четверг',
					type: '',
					level: '',
					color: 'bg-teal-400',
				},
				{ num: 1, time: '-', type: '', level: '' },
				{
					num: 2,
					time: '9:00-10:00',
					type: 'ZUMBA Fitness',
					level: '',
					color: 'bg-indigo-500',
				},
				{
					num: 3,
					time: '10:00-11:00',
					type: 'Растяжка (stretching)',
					level: '',
					color: 'bg-fuchsia-500',
				},
				{ num: 4, time: '-', type: '', level: '' },
				{ num: 5, time: '-', type: '', level: '' },
				{ num: 6, time: '-', type: '', level: '' },
				{ num: 7, time: '-', type: '', level: '' },
				{ num: 8, time: '-', type: '', level: '' },
				{ num: 9, time: '-', type: '', level: '' },
				{ num: 10, time: '-', type: '', level: '' },
				{
					num: 11,
					time: '18:00-19:00',
					type: 'Классическая хатха',
					level: '',
					color: 'bg-orange-400',
				},
				{
					num: 12,
					time: '19:00-20:00',
					type: 'Практика на гамаках',
					level: 'Девушки',
					color: 'bg-green-600',
				},
				{ num: 13, time: '-', type: '', level: '' },
			],
			fridayClasses: [
				{
					num: 0,
					time: 'Пятница',
					type: '',
					level: '',
					color: 'bg-orange-400',
				},
				{ num: 1, time: '-', type: '', level: '' },
				{
					num: 2,
					time: '9:00-10:00',
					type: 'Power Core',
					level: '',
					color: 'bg-teal-400',
				},
				{ num: 3, time: '-', type: '', level: '' },
				{ num: 4, time: '-', type: '', level: '' },
				{ num: 5, time: '-', type: '', level: '' },
				{ num: 6, time: '-', type: '', level: '' },
				{ num: 7, time: '-', type: '', level: '' },
				{ num: 8, time: '-', type: '', level: '' },
				{
					num: 9,
					time: '16:00-17:00',
					type: 'Аренда',
					level: '',
					color: 'bg-white',
				},
				{ num: 10, time: '-', type: '', level: '' },
				{ num: 11, time: '-', type: '', level: '' },
				{
					num: 12,
					time: '19:00-20:00',
					type: 'Классическая хатха',
					level: '',
					color: 'bg-orange-400',
				},
				{
					num: 13,
					time: '20:00-21:00',
					type: 'Латина Соло',
					level: '',
					color: 'bg-violet-500',
				},
			],
			satudayClasses: [
				{
					num: 0,
					time: 'Суббота',
					type: '',
					level: '',
					color: 'bg-indigo-500',
				},
				{ num: 1, time: '-', type: '', level: '' },
				{ num: 2, time: '-', type: '', level: '' },
				{
					num: 3,
					time: '10:00-11:00',
					type: 'Классическая хатха',
					level: '',
					color: 'bg-orange-400',
				},
				{ num: 4, time: '-', type: '', level: '' },
				{
					num: 5,
					time: '12:00-13:00',
					type: 'ZUMBA Fitness',
					level: '',
					color: 'bg-indigo-500',
				},
				{ num: 6, time: '-', type: '', level: '' },
				{ num: 7, time: '-', type: '', level: '' },
				{ num: 8, time: '-', type: '', level: '' },
				{
					num: 9,
					time: '16:00-17:00',
					type: 'Аренда',
					level: '',
					color: 'bg-white',
				},
				{ num: 10, time: '-', type: '', level: '' },
				{ num: 11, time: '-', type: '', level: '' },
				{ num: 12, time: '-', type: '', level: '' },
				{ num: 13, time: '-', type: '', level: '' },
			],
			sundayClasses: [
				{
					num: 0,
					time: 'Воскресенье',
					type: '',
					level: '',
					color: 'bg-green-400',
				},
				{ num: 1, time: '-', type: '', level: '', color: '' },
				{ num: 2, time: '-', type: '', level: '', color: '' },
				{
					num: 3,
					time: '10:00-11:00',
					type: 'Растяжка (stretching)',
					level: '',
					color: 'bg-fuchsia-500',
				},
				{ num: 4, time: '-', type: '', level: '', color: '' },
				{
					num: 5,
					time: '12:00-13:00',
					type: 'Йога в гамаках',
					level: '',
					color: 'bg-green-400',
				},
				{ num: 6, time: '-', type: '', level: '', color: '' },
				{ num: 7, time: '-', type: '', level: '', color: '' },
				{ num: 8, time: '-', type: '', level: '', color: '' },
				{ num: 9, time: '-', type: '', level: '', color: '' },
				{ num: 10, time: '-', type: '', level: '', color: '' },
				{
					num: 11,
					time: '18:00-19:00',
					type: 'ZUMBA Fitness',
					level: '',
					color: 'bg-indigo-500',
				},
				{
					num: 12,
					time: '19:00-20:00',
					type: 'Восточные танцы. Belly Dance (танец живота)',
					level: '',
					color: 'bg-pink-400',
				},
				{ num: 13, time: '-', type: '', level: '', color: '' },
			],
		}
	},
}
</script>
