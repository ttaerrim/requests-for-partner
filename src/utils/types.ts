import React from 'react';

export interface IRequests {
    id: number;
    title: string;
    client: string;
    due: string;
    count: number;
    amount: number;
    method: string[];
    material: string[];
    status: string;
    selected?: boolean;
}

export type RequestsArray = IRequests[];

export type ISetData = React.Dispatch<
    React.SetStateAction<RequestsArray | null>
>;

export type ISetConcatArray = React.Dispatch<
    React.SetStateAction<(string | ConcatArray<string>)[]>
>;

export type ISetSelected = React.Dispatch<React.SetStateAction<string | null>>;

export type ISetSelectedArray = React.Dispatch<
    React.SetStateAction<(string | ConcatArray<string>)[]>
>;

export interface ButtonProps {
    theme: string;
}

export type ButtonTypes = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    type?: string;
    value?: string;
    theme?: string | boolean;
};

export type OptionHolderTypes = {
    name?: string;
};

export type IsOpenTypes = {
    isOpen?: boolean;
};

export type CheckboxTypes = {
    className: string;
    checked: boolean;

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export interface CheckboxProps {
    id: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string | null;
    name: string;
    value: string;
}
