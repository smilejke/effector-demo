import { $selectedCategory } from "features/home/stores";
import { selectCategory } from "features/home/controllers";

$selectedCategory.on(selectCategory, (_, payload) => payload);
