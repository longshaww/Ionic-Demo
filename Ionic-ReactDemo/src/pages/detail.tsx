import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonContent,
	IonImg,
	IonText,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonList,
	IonListHeader,
	IonRadio,
	IonRadioGroup,
	IonButton,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail: React.FC = () => {
	const [product, setProduct] = useState<any>();
	const [selected, setSelected] = useState<string>("M");

	const { id }: any = useParams();

	useEffect(() => {
		async function getProduct() {
			const res = await fetch(`http://localhost:4000/product/${id}`);
			const data = await res.json();
			setProduct(data);
		}
		getProduct();
	}, [id]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Detail</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				{product && (
					<div className="ion-margin">
						<IonImg
							src={product.description.imageList[0]}
						></IonImg>
						<IonText>
							<h3>{product.nameProduct}</h3>
						</IonText>
						<IonText>{`${product.description.price},000đ`}</IonText>
						<IonList>
							<IonRadioGroup
								value={selected}
								onIonChange={(e) =>
									setSelected(e.detail.value)
								}
							>
								<IonListHeader>
									<IonLabel>Name</IonLabel>
								</IonListHeader>
								{product.size
									.reverse()
									.map(
										(
											item: any,
											index: number
										) => {
											return (
												<IonItem
													key={index}
												>
													<IonLabel>
														{
															item.sizeName
														}
													</IonLabel>
													<IonRadio
														slot="start"
														value={
															item.sizeName
														}
													/>
												</IonItem>
											);
										}
									)}
								<IonButton
									expand="block"
									color="dark"
									fill="outline"
									className="ion-margin"
								>
									Thêm vào giỏ hàng
								</IonButton>
							</IonRadioGroup>
						</IonList>
					</div>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Detail;
