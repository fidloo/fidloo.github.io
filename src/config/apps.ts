import { App } from "@/types/enums";
import type { AppData } from "@/types";

import {cinexploreAppData} from "@/config/cinexplore";

export function getAppData(app: App): AppData {
    switch (app) {
        case App.Cinexplore:
            return cinexploreAppData;
    }
}
