import React, { useState, useEffect } from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonButtons,
	IonMenuButton,
	IonCardTitle,
	IonCardContent,
	IonImg,
	IonButton,
	IonRow,
} from "@ionic/react";

const CardExamples: React.FC = () => {
	const [list, setList] = useState<any>();

	useEffect(() => {
		async function getList() {
			const res = await fetch(
				"https://dreamhotel.herokuapp.com/api/rooms"
			);
			const data = await res.json();
			data.sort((a: any, b: any) => {
				return a.room_id - b.room_id;
			});
			setList(data);
		}
		getList();
	}, []);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Ionic Room API Demo</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				{list &&
					list.map((item: any, index: number) => (
						<IonCard key={index}>
							<IonImg src={item.image}></IonImg>
							<IonCardHeader>
								<IonCardTitle>
									Phòng {item.room_id}
								</IonCardTitle>
								<IonCardContent>
									Lorem ipsum dolor sit amet
									consectetur adipisicing elit.
									Maxime mollitia, molestiae quas vel
									<IonRow className="ion-justify-content-center">
										<IonButton color="dark">
											View
										</IonButton>
									</IonRow>
								</IonCardContent>
							</IonCardHeader>
						</IonCard>
					))}
			</IonContent>
		</IonPage>
	);
};

export default CardExamples;
