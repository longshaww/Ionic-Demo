import React, { useState } from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonInput,
	IonItem,
	IonLabel,
	IonList,
	IonButton,
	IonGrid,
	IonRow,
	IonCol,
	IonCheckbox,
	IonButtons,
	IonMenuButton,
} from "@ionic/react";

import "./todo.css";
import { dataType } from "../interface/interface";

const Todo: React.FC = () => {
	const [text, setText] = useState<string>("");
	const [list, setList] = useState<dataType[]>([
		{ id: 1, content: "Di choi", isChecked: false },
		{ id: 2, content: "Di hoc", isChecked: true },
	]);

	function addItem() {
		if (text === "") {
			return;
		}
		const newList: dataType[] = [...list];
		const newData: dataType = {
			id: list.length + 1,
			content: text,
			isChecked: true,
		};
		newList.push(newData);
		setList(newList);
		setText("");
	}

	function deleteItem(id: number) {
		const findById = list.find((item) => item.id === id);
		// this will never be null
		const index = list.indexOf(findById!);
		const newList = [...list.slice(0, index), ...list.slice(index + 1)];
		setList(newList);
	}

	function onChecked(id: number) {
		const findById = list.find((item) => item.id === id);
		findById!.isChecked = !findById!.isChecked;
		const index = list.indexOf(findById!);
		const newList = [
			...list.slice(0, index),
			findById!,
			...list.slice(index + 1),
		];
		setList(newList);
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>To do List</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonInput
								placeholder="Add Todo"
								value={text}
								onIonChange={(e) =>
									setText(e.detail.value!)
								}
								className="ion-padding"
							></IonInput>
						</IonCol>
						<IonCol size="3">
							<IonButton
								size="small"
								color="dark"
								onClick={addItem}
							>
								Add
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
				<IonList>
					{list.map(({ id, content, isChecked }, index) => (
						<IonItem key={index}>
							<IonCheckbox
								checked={!isChecked}
								onClick={() => onChecked(id)}
								color="primary"
							/>
							<IonLabel
								className={
									!isChecked
										? "checked"
										: "no-checked"
								}
							>
								{content}
							</IonLabel>
							<IonButton
								color="dark"
								onClick={() => deleteItem(id)}
							>
								X
							</IonButton>
						</IonItem>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Todo;
