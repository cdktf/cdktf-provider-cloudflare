/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dex_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustDexTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dex_test#account_id DataCloudflareZeroTrustDexTest#account_id}
  */
  readonly accountId: string;
  /**
  * The unique identifier for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dex_test#dex_test_id DataCloudflareZeroTrustDexTest#dex_test_id}
  */
  readonly dexTestId: string;
  /**
  * DEX rules targeted by this test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dex_test#target_policies DataCloudflareZeroTrustDexTest#target_policies}
  */
  readonly targetPolicies?: DataCloudflareZeroTrustDexTestTargetPolicies[] | cdktf.IResolvable;
}
export interface DataCloudflareZeroTrustDexTestData {
}

export function dataCloudflareZeroTrustDexTestDataToTerraform(struct?: DataCloudflareZeroTrustDexTestData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustDexTestDataToHclTerraform(struct?: DataCloudflareZeroTrustDexTestData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustDexTestDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCloudflareZeroTrustDexTestData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustDexTestData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }
}
export interface DataCloudflareZeroTrustDexTestTargetPolicies {
}

export function dataCloudflareZeroTrustDexTestTargetPoliciesToTerraform(struct?: DataCloudflareZeroTrustDexTestTargetPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustDexTestTargetPoliciesToHclTerraform(struct?: DataCloudflareZeroTrustDexTestTargetPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCloudflareZeroTrustDexTestTargetPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustDexTestTargetPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCloudflareZeroTrustDexTestTargetPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataCloudflareZeroTrustDexTestTargetPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference {
    return new DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dex_test cloudflare_zero_trust_dex_test}
*/
export class DataCloudflareZeroTrustDexTest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_dex_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustDexTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDexTest to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustDexTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dex_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDexTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dex_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/data-sources/zero_trust_dex_test cloudflare_zero_trust_dex_test} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustDexTestConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustDexTestConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_dex_test',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.13.0',
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
    this._accountId = config.accountId;
    this._dexTestId = config.dexTestId;
    this._targetPolicies.internalValue = config.targetPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataCloudflareZeroTrustDexTestDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dex_test_id - computed: false, optional: false, required: true
  private _dexTestId?: string; 
  public get dexTestId() {
    return this.getStringAttribute('dex_test_id');
  }
  public set dexTestId(value: string) {
    this._dexTestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dexTestIdInput() {
    return this._dexTestId;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_policies - computed: true, optional: true, required: false
  private _targetPolicies = new DataCloudflareZeroTrustDexTestTargetPoliciesList(this, "target_policies", false);
  public get targetPolicies() {
    return this._targetPolicies;
  }
  public putTargetPolicies(value: DataCloudflareZeroTrustDexTestTargetPolicies[] | cdktf.IResolvable) {
    this._targetPolicies.internalValue = value;
  }
  public resetTargetPolicies() {
    this._targetPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPoliciesInput() {
    return this._targetPolicies.internalValue;
  }

  // targeted - computed: true, optional: false, required: false
  public get targeted() {
    return this.getBooleanAttribute('targeted');
  }

  // test_id - computed: true, optional: false, required: false
  public get testId() {
    return this.getStringAttribute('test_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      dex_test_id: cdktf.stringToTerraform(this._dexTestId),
      target_policies: cdktf.listMapper(dataCloudflareZeroTrustDexTestTargetPoliciesToTerraform, false)(this._targetPolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dex_test_id: {
        value: cdktf.stringToHclTerraform(this._dexTestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_policies: {
        value: cdktf.listMapperHcl(dataCloudflareZeroTrustDexTestTargetPoliciesToHclTerraform, false)(this._targetPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCloudflareZeroTrustDexTestTargetPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
