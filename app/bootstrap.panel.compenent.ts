import {Component, Input} from 'angular2/core';

@Component({
    selector:'bs-panel',
            styles: [`
        .bs-panel {
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        
        .bs-panel .bs-panel-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .bs-panel .bs-panel-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        
        .bs-panel .bs-panel-content {
            padding: 20px;
        }
    `],
    template:`
  <div class="bs-panel">
        <div 
            class="bs-panel-title"
            (click)="toggle()">
            {{ title }} 
            <i 
                class="pull-right glyphicon" 
                [ngClass]="
                    { 
                        'glyphicon-chevron-down': !isExpanded, 
                        'glyphicon-chevron-up': isExpanded 
                    }">
            </i>
        </div>
        <div *ngIf="isExpanded" class="bs-panel-content">
            <ng-content></ng-content> 
        </div>
    </div>    
    `
})
export class BootstrapPanel{
     isExpanded = false;
    @Input() title: string;
        
    toggle(){
        this.isExpanded = !this.isExpanded;
    }

}