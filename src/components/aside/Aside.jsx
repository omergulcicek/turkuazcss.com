import { NavLink } from "react-router-dom"
import menuItems from "./menuItems"
import { StyledAside, StyledGradient } from "./Styled"
import SvgWrap from "./../svgComponents/SvgWrap"
import SvgAbout from "./../svgComponents/About"
import SvgDocs from "./../svgComponents/Docs"

function Aside () {
	const menu = []

	for (let i = 0; i < menuItems.length; i++) {
		const { title, children } = menuItems[i]
		const links = []

		children.forEach(({title, description, path}, i) => {
			links.push(
				<NavLink to={path} key={i}>{title}</NavLink>
			)
		})

		menu.push(<>
			<strong>{title.toLocaleUpperCase()}</strong>

			<nav>
				{links}
			</nav>
		</>)
	}


	return (
		<StyledAside>
			<StyledGradient />

			<section>
				<nav>
					<NavLink to="/docs">
						<SvgWrap color="#eb4141"><SvgDocs /></SvgWrap>

						<span>Dokümantasyon</span>
					</NavLink>

					<NavLink to="/docs/form">
						<SvgWrap color="#4deb41"><SvgDocs /></SvgWrap>

						<span>Form</span>
					</NavLink>

					<NavLink to="/elements">
						<SvgWrap color="#4deb41"><SvgDocs /></SvgWrap>

						<span>Elementler</span>
					</NavLink>

					<NavLink to="/docs/components">
						<SvgWrap color="#4deb41"><SvgDocs /></SvgWrap>

						<span>Bileşenler</span>
					</NavLink>

					<NavLink to="/themes">
						<SvgWrap color="#e241eb"><SvgDocs /></SvgWrap>

						<span>Temalar</span>
					</NavLink>

					<NavLink to="/about">
						<SvgWrap color="#6641eb"><SvgDocs /></SvgWrap>

						<span>Hakkında</span>
					</NavLink>

					<NavLink to="/news">
						<SvgWrap color="#4deb41"><SvgDocs /></SvgWrap>

						<span>Yenilikler</span>
					</NavLink>
				</nav>

				{menu}
			</section>
		</StyledAside>
	)
}

export default Aside