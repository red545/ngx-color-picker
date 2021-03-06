import { OnChanges, OnDestroy, EventEmitter, ApplicationRef, ElementRef, ViewContainerRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { ColorPickerService } from './color-picker.service';
export declare class ColorPickerDirective implements OnChanges, OnDestroy {
    private injector;
    private cfr;
    private appRef;
    private vcRef;
    private elRef;
    private _service;
    private dialog;
    private dialogCreated;
    private ignoreChanges;
    private cmpRef;
    disabled: boolean;
    colorPicker: string;
    cpWidth: string;
    cpHeight: string;
    cpFieldHeight: number;
    cpToggle: boolean;
    cpIgnoredElements: any;
    cpDisableInput: boolean;
    cpAlphaChannel: string;
    cpOutputFormat: string;
    cpFallbackColor: string;
    cpDialogDisplay: string;
    cpSaveClickOutside: boolean;
    cpUseRootViewContainer: boolean;
    cpPosition: string;
    cpPositionOffset: string;
    cpPositionRelativeToArrow: boolean;
    cpOKButton: boolean;
    cpOKButtonText: string;
    cpOKButtonClass: string;
    cpCancelButton: boolean;
    cpCancelButtonText: string;
    cpCancelButtonClass: string;
    cpPresetLabel: string;
    cpPresetColors: string[];
    cpMaxPresetColorsLength: number;
    cpPresetEmptyMessage: string;
    cpPresetEmptyMessageClass: string;
    cpAddColorButton: boolean;
    cpAddColorButtonText: string;
    cpAddColorButtonClass: string;
    cpRemoveColorButtonClass: string;
    cpInputChange: EventEmitter<any>;
    cpToggleChange: EventEmitter<boolean>;
    cpSliderChange: EventEmitter<any>;
    cpSliderDragEnd: EventEmitter<string>;
    cpSliderDragStart: EventEmitter<string>;
    colorPickerOpen: EventEmitter<string>;
    colorPickerClose: EventEmitter<string>;
    colorPickerCancel: EventEmitter<string>;
    colorPickerSelect: EventEmitter<string>;
    colorPickerChange: EventEmitter<string>;
    cpPresetColorsChange: EventEmitter<any>;
    handleClick(event: any): void;
    handleFocus(event: any): void;
    handleInput(event: any): void;
    constructor(injector: Injector, cfr: ComponentFactoryResolver, appRef: ApplicationRef, vcRef: ViewContainerRef, elRef: ElementRef, _service: ColorPickerService);
    ngOnDestroy(): void;
    ngOnChanges(changes: any): void;
    openDialog(): void;
    closeDialog(): void;
    toggle(value: boolean): void;
    colorChanged(value: string, ignore?: boolean): void;
    colorCanceled(): void;
    colorSelected(value: string): void;
    inputFocus(): void;
    inputChange(value: string): void;
    inputChanged(event: any): void;
    sliderChanged(event: any): void;
    sliderDragEnd(event: any): void;
    sliderDragStart(event: any): void;
    presetColorsChanged(value: any[]): void;
}
