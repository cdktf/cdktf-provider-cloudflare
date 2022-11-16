// https://www.terraform.io/docs/providers/cloudflare/d/waf_packages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareWafPackagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#id DataCloudflareWafPackages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The zone identifier to target for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#zone_id DataCloudflareWafPackages#zone_id}
  */
  readonly zoneId: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#filter DataCloudflareWafPackages#filter}
  */
  readonly filter?: DataCloudflareWafPackagesFilter;
}
export interface DataCloudflareWafPackagesPackages {
}

export function dataCloudflareWafPackagesPackagesToTerraform(struct?: DataCloudflareWafPackagesPackages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataCloudflareWafPackagesPackagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareWafPackagesPackages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareWafPackagesPackages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_mode - computed: true, optional: false, required: false
  public get actionMode() {
    return this.getStringAttribute('action_mode');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detection_mode - computed: true, optional: false, required: false
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sensitivity - computed: true, optional: false, required: false
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
}

export class DataCloudflareWafPackagesPackagesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataCloudflareWafPackagesPackagesOutputReference {
    return new DataCloudflareWafPackagesPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCloudflareWafPackagesFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#action_mode DataCloudflareWafPackages#action_mode}
  */
  readonly actionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#detection_mode DataCloudflareWafPackages#detection_mode}
  */
  readonly detectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#name DataCloudflareWafPackages#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages#sensitivity DataCloudflareWafPackages#sensitivity}
  */
  readonly sensitivity?: string;
}

export function dataCloudflareWafPackagesFilterToTerraform(struct?: DataCloudflareWafPackagesFilterOutputReference | DataCloudflareWafPackagesFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_mode: cdktf.stringToTerraform(struct!.actionMode),
    detection_mode: cdktf.stringToTerraform(struct!.detectionMode),
    name: cdktf.stringToTerraform(struct!.name),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
  }
}

export class DataCloudflareWafPackagesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCloudflareWafPackagesFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionMode = this._actionMode;
    }
    if (this._detectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionMode = this._detectionMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareWafPackagesFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionMode = undefined;
      this._detectionMode = undefined;
      this._name = undefined;
      this._sensitivity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionMode = value.actionMode;
      this._detectionMode = value.detectionMode;
      this._name = value.name;
      this._sensitivity = value.sensitivity;
    }
  }

  // action_mode - computed: false, optional: true, required: false
  private _actionMode?: string; 
  public get actionMode() {
    return this.getStringAttribute('action_mode');
  }
  public set actionMode(value: string) {
    this._actionMode = value;
  }
  public resetActionMode() {
    this._actionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionModeInput() {
    return this._actionMode;
  }

  // detection_mode - computed: false, optional: true, required: false
  private _detectionMode?: string; 
  public get detectionMode() {
    return this.getStringAttribute('detection_mode');
  }
  public set detectionMode(value: string) {
    this._detectionMode = value;
  }
  public resetDetectionMode() {
    this._detectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModeInput() {
    return this._detectionMode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages cloudflare_waf_packages}
*/
export class DataCloudflareWafPackages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_waf_packages";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/cloudflare/d/waf_packages cloudflare_waf_packages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareWafPackagesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareWafPackagesConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_waf_packages',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '3.28.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._zoneId = config.zoneId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // packages - computed: true, optional: false, required: false
  private _packages = new DataCloudflareWafPackagesPackagesList(this, "packages", false);
  public get packages() {
    return this._packages;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataCloudflareWafPackagesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataCloudflareWafPackagesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      filter: dataCloudflareWafPackagesFilterToTerraform(this._filter.internalValue),
    };
  }
}
