import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonContent,
} from "@ionic/react";

const Home: React.FC = () => {
	return (
		<>
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton />
						</IonButtons>
						<IonTitle>Ionic Room API Demo</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent>Home</IonContent>
			</IonPage>
		</>
	);
};

export default Home;
