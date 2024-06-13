import { inject } from "@angular/core";
import { AdditionService } from "../services/addition.service";
import { CanActivateFn } from "@angular/router";

const authGuard: CanActivateFn = (route, state) => {
    const adder = inject(AdditionService);
    return adder.add(2, 2) === 4;
}

