/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export interface Colorway {
    name: string,
    import: string,
    accent: string,
    primary: string,
    secondary: string,
    tertiary: string,
    original?: boolean,
    author: string,
    authorID: string,
    colors?: string[],
    isGradient?: boolean;
}

export interface ToolboxItem {
    title: string,
    onClick: () => void,
    id?: string;
}

export interface WSMessage {
    type: string;
    [x: string]: string;
}

export type SettingsType = "text" | "select" | "list";