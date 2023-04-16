import { Component } from '@angular/core';

@Component({
  selector: 'app-ts-intro-oop',
  templateUrl: './ts-intro-oop.component.html',
  styleUrls: ['./ts-intro-oop.component.css'],
})
export class TsIntroOopComponent {}

class Car {
  private distanceRun: number = 0;
  private color: string;

  constructor(private isHybrid: boolean, color: string = 'red') {
    this.color = color;
  }

  getGasConsumption(): string {
    return this.isHybrid ? 'Very low' : 'Too high!';
  }
  drive(distance: number): void {
    this.distanceRun += distance;
  }
  static honk(): string {
    return 'HOOONK!';
  }
  get distance(): number {
    return this.distanceRun;
  }
}
class CarWithFields {
  public make: string;
  public model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

interface Vehicle {
  make: string;
}
class CarWithoutFields implements Vehicle {
  constructor(public make: string, public model: string) {}
}

interface Exception {
  message: string;
  id?: number;
}
interface ErrorHandler {
  exceptions: Exception[];
  logException(message: string, id?: number): void;
}
interface ExceptionHandlerSettings {
  logAllExceptions: boolean;
}
class CustomErrorHandler implements ErrorHandler {
  exceptions: Exception[] = [];
  logAllExceptions: boolean;

  constructor(settings: ExceptionHandlerSettings) {
    this.logAllExceptions = settings.logAllExceptions;
  }

  logException(message: string, id?: number | undefined): void {
    this.exceptions.push({ message, id });
  }
}

interface A {
  a: number;
}
const instance = { a: 3 } as A;
instance.a = 5;

interface DatabaseService {
  save(order: Order): void;
}
class Order {}
class OrderProcessor {
  private databaseService: DatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  process(order: Order) {
    this.databaseService.save(order);
  }
}

// let orderProcessor = new OrderProcessor(mockLibrary.mock<DatabaseService>());
// orderProcessor.process(new Order());

interface AuthService {
  isAuthenticated(): boolean;
}
class Auth {
  private authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  execute() {
    if (this.authService.isAuthenticated()) {
    } else {
    }
  }
}
class MockAuthService implements AuthService {
  isAuthenticated(): boolean {
    return true;
  }
}
const mockAuthService = new MockAuthService();
const auth = new Auth(mockAuthService);

class Hatchback extends CarWithFields {
  public prodYear: number;

  constructor(make: string, model: string, prodYear: number) {
    super(make, model);
    this.prodYear = prodYear;
  }
}
const hatchback = new Hatchback('Renault', 'Clio', 2002);
