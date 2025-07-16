/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/schema_validation_schemas_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareSchemaValidationSchemasListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/schema_validation_schemas_list#max_items DataCloudflareSchemaValidationSchemasList#max_items}
  */
  readonly maxItems?: number;
  /**
  * Omit the source-files of schemas and only retrieve their meta-data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/schema_validation_schemas_list#omit_source DataCloudflareSchemaValidationSchemasList#omit_source}
  */
  readonly omitSource?: boolean | cdktf.IResolvable;
  /**
  * Filter for enabled schemas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/schema_validation_schemas_list#validation_enabled DataCloudflareSchemaValidationSchemasList#validation_enabled}
  */
  readonly validationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/schema_validation_schemas_list#zone_id DataCloudflareSchemaValidationSchemasList#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflareSchemaValidationSchemasListResult {
}

export function dataCloudflareSchemaValidationSchemasListResultToTerraform(struct?: DataCloudflareSchemaValidationSchemasListResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareSchemaValidationSchemasListResultToHclTerraform(struct?: DataCloudflareSchemaValidationSchemasListResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareSchemaValidationSchemasListResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareSchemaValidationSchemasListResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareSchemaValidationSchemasListResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema_id - computed: true, optional: false, required: false
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // validation_enabled - computed: true, optional: false, required: false
  public get validationEnabled() {
    return this.getBooleanAttribute('validation_enabled');
  }
}

export class DataCloudflareSchemaValidationSchemasListResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareSchemaValidationSchemasListResultOutputReference {
    return new DataCloudflareSchemaValidationSchemasListResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list}
*/
export class DataCloudflareSchemaValidationSchemasList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_schema_validation_schemas_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareSchemaValidationSchemasList to import
  * @param importFromId The id of the existing DataCloudflareSchemaValidationSchemasList that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/schema_validation_schemas_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareSchemaValidationSchemasList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_schema_validation_schemas_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareSchemaValidationSchemasListConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareSchemaValidationSchemasListConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_schema_validation_schemas_list',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.7.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._maxItems = config.maxItems;
    this._omitSource = config.omitSource;
    this._validationEnabled = config.validationEnabled;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // omit_source - computed: true, optional: true, required: false
  private _omitSource?: boolean | cdktf.IResolvable; 
  public get omitSource() {
    return this.getBooleanAttribute('omit_source');
  }
  public set omitSource(value: boolean | cdktf.IResolvable) {
    this._omitSource = value;
  }
  public resetOmitSource() {
    this._omitSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitSourceInput() {
    return this._omitSource;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareSchemaValidationSchemasListResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // validation_enabled - computed: false, optional: true, required: false
  private _validationEnabled?: boolean | cdktf.IResolvable; 
  public get validationEnabled() {
    return this.getBooleanAttribute('validation_enabled');
  }
  public set validationEnabled(value: boolean | cdktf.IResolvable) {
    this._validationEnabled = value;
  }
  public resetValidationEnabled() {
    this._validationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationEnabledInput() {
    return this._validationEnabled;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_items: cdktf.numberToTerraform(this._maxItems),
      omit_source: cdktf.booleanToTerraform(this._omitSource),
      validation_enabled: cdktf.booleanToTerraform(this._validationEnabled),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      omit_source: {
        value: cdktf.booleanToHclTerraform(this._omitSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validation_enabled: {
        value: cdktf.booleanToHclTerraform(this._validationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
