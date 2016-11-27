import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

/**
 * This isn't a good use case to export a common module. But this shared module
 * in practice would also contain components that should be shared amongst other modules.
 * E.g. for shared components or directives.
 */
@NgModule({
  exports: [CommonModule]
})
export class SharedModule {}
