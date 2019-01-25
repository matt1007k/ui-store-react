import React from 'react'

const TitlePage = ({title, description}) => {
  return (
    <section class="bg-title-page p-t-50 p-b-40 flex-col-c-m" style={{backgroundImage: 'url(assets/images/heading-pages-02.jpg)'}} >
		<h2 class="l-text2 t-center">
			{title}
		</h2>
		<p class="m-text13 t-center">
			{description}
		</p>
	</section>
  )
}

export default TitlePage
