<template>
	<div id="app" class="wrapper">
		<header>
			<div class="navbar">
				<div class="container">
					<div class="navbar_content">
						<div class="logo">
							<router-link class="flex" to="/">
								<img src="./assets/logo.svg" alt="" />
								<div class="navbar_link block">
									<div class="logo_text text-blue-700">BonaGarden</div>
									<div class="text-sm">Гармония тела и души</div>
								</div>
							</router-link>
						</div>
						<ul class="navbar_list">
							<li class="navbar_item" v-for="link in links" :key="link.title">
								<router-link
									class="navbar_link"
									:title="link.title"
									:to="link.url"
									>{{ link.title }}</router-link
								>
							</li>
						</ul>
						<div class="phone_item">+7-966-752-00-87</div>
					</div>
				</div>
			</div>
		</header>
		<router-view></router-view>
		<footer>
			<div class="container">
				<div class="footer_content">
					<div class="footer_link">
						<div class="logo items-start">
							<router-link class="flex" to="/">
								<img src="./assets/logo.svg" alt="" />
								<div class="navbar_link block">
									<div class="logo_text text-blue-700">BonaGarden</div>
									<div class="text-sm">Гармония тела и души</div>
								</div>
							</router-link>
						</div>
						<ul class="navbar_block">
							<li
								class="navbar_item mb-3"
								v-for="link in links"
								:key="link.title"
							>
								<router-link
									class="navbar_link"
									:title="link.title"
									:to="link.url"
									>{{ link.title }}</router-link
								>
							</li>
						</ul>
						<div class="location_address">
							<img class="row-span-3" src="./assets/map.png" alt="" />
							<div class="location_address_content row-span-2 col-span-2">
								<p>мы находимся по адресу</p>
								<div class="text-xl">Петергоф, ул. Чичеринская, 2а</div>
								<p>c 9:00 до 22:00</p>
							</div>
							<div class="email_link">bonagarden@mail.ru</div>
						</div>
					</div>
					<div class="footer_company_policy">
						<div class="company_policy">
							<div class="text-teal-500">
								<a href="">Политика конфиденциальности</a>
							</div>
							<div class="text-teal-500">
								<a href="">Пользовательское соглашение</a>
							</div>
							<div>© 2022 BonaGarden</div>
						</div>
						<div class="social_media_links">
							<div>Достигните гармонии с нами</div>
							<img class="h-10 ml-4" src="../src/assets/instagram.svg" alt="" />
							<img class="h-10 ml-4" src="../src/assets/vk.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
	data() {
		return {
			links: [
				{ title: 'Программы', url: '/programs' },
				{ title: 'Тренеры', url: '/trainers' },
				{ title: 'Цены', url: '/prices' },
				{ title: 'Расписание', url: '/schedule' },
				{ title: 'О нас', url: '/about_us' },
				{ title: 'Контакты', url: '/contacts' },
			],
		}
	},
}
</script>

<style>
@font-face {
	font-family: gilroy-medium;
	src: url('./fonts/gilroy/gilroy-medium.ttf');
}
@font-face {
	font-family: gilroy-semibold;
	src: url('./fonts/gilroy/gilroy-semibold.ttf');
}
@font-face {
	font-family: gilroy-bold;
	src: url('./fonts/gilroy/gilroy-bold.ttf');
}
@font-face {
	font-family: phenomenablack;
	src: url('./fonts/phenomena/Phenomenablack.ttf');
}
@font-face {
	font-family: phenomena;
	src: url('./fonts/phenomena/Phenomena.ttf');
}
.navbar_link {
	font-family: gilroy-medium;
}
.logo_text {
	font-family: phenomenablack;
	font-size: 40px;
}
.material-icons {
	font-size: 40px;
}
</style>
