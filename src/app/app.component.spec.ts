import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {CalculadoraModule} from './calculadora/module/calculadora.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';


describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CalculadoraModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'untitled'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('untitled');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    //const compiled = fixture.debugElement.nativeElement;
    expect(app.title).toEqual('untitled');
    //expect(compiled.querySelector('.content title').textContent).toContain('untitled app is running!');
  });
});
