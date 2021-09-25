import React from "react";
import SwipeableBottomSheet from '@sergeymyssak/swipeable-bottom-sheet';
import '@sergeymyssak/swipeable-bottom-sheet/lib/min.css';
import style from "../style/bottomSheet.module.css";
import StartRoom from "./bottom_sheets/StartRoom";
import NewRoom from "./bottom_sheets/NewRoom";
export default function BottomSheet(props) {
    return (
        <div className={style.SwipeableBottomSheetDiv}>
            <SwipeableBottomSheet
                isOpen={props.sheetVisible}
                onChange={() => {
                    props.setSheetVisible(!props.sheetVisible)
                    props.setItemsVisible(true)
                }}
                isFullScreen={props.sheetTitle == 'room detail' ? true : false}
            >
                <div className={style.BottomSheetContainer}
                    style={{ backgroundColor: props.sheetTitle == 'profile' ? 'transparent' : "" }}
                >
                    {props.sheetTitle == "new room" ? (
                        <NewRoom
                            cardDetail={props.cardDetail}
                            setSheetVisible={(item) => {
                                props.setSheetVisible(item);
                                props.setItemsVisible(true);
                            }} />
                    ) : props.sheetTitle == 'start room' ? (
                        < StartRoom
                            setSheetCreateRoom={props.setSheetCreateRoom}
                            setSheetVisible={(item) => {
                                props.setSheetVisible(item);
                                props.setItemsVisible(true);
                            }} />
                    ) : (
                        ""
                    )}
                </div>
            </SwipeableBottomSheet>
        </div>
    )
}