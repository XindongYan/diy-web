import React from 'react';
import { Carousel, Card, List, Tag } from 'antd';

const { Meta } = Card;

export default class News extends React.PureComponent {

	state = {
		carousel: [
			{ imageUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', title: 'Rest' },
			{ imageUrl: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', title: 'Ok' },
			{ imageUrl: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640', title: 'Title' }
		]
	}

	render() {

		const { carousel } = this.state;

		const data = [
			{
				title: 'Title 1',
			},
			{
				title: 'Title 2',
			},
			{
				title: 'Title 3',
			},
			{
				title: 'Title 4',
			},
			{
				title: 'Title 5',
			},
			{
				title: 'Title 6',
			},
		];

		return (
			<div>
				<Carousel autoplay style={{ textAlign: 'center', height: '160px', lineHeight: '160px', background: '#364d79', overflow: 'hidden' }}>

					{carousel.map((c) => {
						return <Card
							hoverable
							style={{ width: 240, height: 500 }}
							cover={<img alt="example" src={c.imageUrl} style={{ height: 500 }} />}
						>
							<Meta title={c.title} />
						</Card>
					})}
				</Carousel>

				<Tag color="#FF6600" style={{ height: 30, width: 80, fontSize: 15, paddingTop: 5, margin: '36px 0' }}>为您推荐</Tag>

				<List
					grid={{
						gutter: 16,
						xs: 1,
						sm: 2,
						md: 4,
						lg: 4,
						xl: 6,
						xxl: 3,
					}}
					dataSource={data}
					renderItem={(item, index) => (
						<List.Item>
							<Card key={index} style={{ borderRadius: 8, background: '#F5F5F5', border: 0, height: 120 }}>{item.title}</Card>
						</List.Item>
					)}
				/>
			</div>
		)
	}
}