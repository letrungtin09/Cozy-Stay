import * as React from 'react';
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { viVN } from "@mui/x-date-pickers/locales";

export default function DateRangePickerValue({ dayForLease, onDateStart, onDateEnd }: any) {
    const [dayStart, setDayStart] = React.useState<Dayjs | null>(dayjs());
    const [dayEnd, setDayEnd] = React.useState<Dayjs | null>(dayStart ? dayStart.add(dayForLease, 'month') : null);

    const minDate = dayjs().startOf('day'); // Ngày hiện tại, bắt đầu từ đầu ngày

    useEffect(() => {
        if (dayStart) {
            setDayEnd(dayStart.add(dayForLease, 'month'));
        }
    }, [dayStart, dayForLease]);

    useEffect(() => {
        onDateStart(dayStart);
        onDateEnd(dayEnd);
    }, [dayStart, dayEnd, onDateStart, onDateEnd]);

    return (
        <>
            <div className="detailInfo__date date-start flex flex-col mb-[15px]">
                <div className="date-title font-bold mb-[10px]">
                    Ngày bắt đầu
                </div>
                <div className="date-time pr-[4px]">
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        localeText={
                            viVN.components.MuiLocalizationProvider
                                .defaultProps.localeText
                        }
                        adapterLocale="en-gb">
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                                label="Chọn ngày"
                                value={dayStart}
                                minDate={minDate}
                                onChange={(newValue) => setDayStart(newValue)}
                            />

                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
            <div className="detailInfo__date date-end flex flex-col mb-[15px]">
                <div className="date-title font-bold mb-[10px]">
                    Ngày kết thúc
                </div>
                <div className="date-time pr-[4px]">
                    <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        localeText={
                            viVN.components.MuiLocalizationProvider
                                .defaultProps.localeText
                        }
                        adapterLocale="en-gb">
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker
                                label="Ngày kết thúc"
                                value={dayEnd}
                                disabled
                            />

                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
        </>

    );
}
