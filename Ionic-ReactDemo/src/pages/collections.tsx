import React, { useState, useEffect } from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonCardHeader,
	IonButtons,
	IonMenuButton,
	IonCardTitle,
	IonImg,
	IonSearchbar,
	SearchbarChangeEventDetail,
} from "@ionic/react";
import { Link } from "react-router-dom";

interface Collection {}

const Collections: React.FC = () => {
	const [list, setList] = useState<any>();
	const [search, setSearch] = useState<string>("");

	const [url, setUrl] = useState<any>("collections");

	useEffect(() => {
		async function getList() {
			const res = await fetch(`http://localhost:4000/${url}`);
			const data = await res.json();
			setList(data);
			return data;
		}
		getList();
	}, [url]);

	function onSearchChange(e: CustomEvent<SearchbarChangeEventDetail>) {
		const value = e.detail.value!;
		setSearch(value);
		if (value === "" || value === undefined) {
			setUrl("collections");
			return;
		}
		setUrl(`search?q=${value}`);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Ionic Room API Demo</IonTitle>
				</IonToolbar>
				<IonToolbar>
					<IonSearchbar
						value={search}
						onIonChange={onSearchChange}
					></IonSearchbar>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				{list &&
					list.map((item: any, index: number) => (
						<Link
							key={index}
							to={`collections/${item._id}`}
							className="no-checked"
						>
							<IonCard>
								<IonImg
									src={item.description.imageList[0]}
								></IonImg>
								<IonCardHeader>
									<IonCardTitle class="ion-text-center">
										{item.nameProduct}
									</IonCardTitle>
								</IonCardHeader>
							</IonCard>
						</Link>
					))}
			</IonContent>
		</IonPage>
	);
};

export default Collections;
