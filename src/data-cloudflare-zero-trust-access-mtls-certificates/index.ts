/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_mtls_certificates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflareZeroTrustAccessMtlsCertificatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_mtls_certificates#account_id DataCloudflareZeroTrustAccessMtlsCertificates#account_id}
  */
  readonly accountId?: string;
  /**
  * Max items to fetch, default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_mtls_certificates#max_items DataCloudflareZeroTrustAccessMtlsCertificates#max_items}
  */
  readonly maxItems?: number;
  /**
  * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_mtls_certificates#zone_id DataCloudflareZeroTrustAccessMtlsCertificates#zone_id}
  */
  readonly zoneId?: string;
}
export interface DataCloudflareZeroTrustAccessMtlsCertificatesResult {
}

export function dataCloudflareZeroTrustAccessMtlsCertificatesResultToTerraform(struct?: DataCloudflareZeroTrustAccessMtlsCertificatesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflareZeroTrustAccessMtlsCertificatesResultToHclTerraform(struct?: DataCloudflareZeroTrustAccessMtlsCertificatesResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflareZeroTrustAccessMtlsCertificatesResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflareZeroTrustAccessMtlsCertificatesResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflareZeroTrustAccessMtlsCertificatesResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_hostnames - computed: true, optional: false, required: false
  public get associatedHostnames() {
    return this.getListAttribute('associated_hostnames');
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

export class DataCloudflareZeroTrustAccessMtlsCertificatesResultList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflareZeroTrustAccessMtlsCertificatesResultOutputReference {
    return new DataCloudflareZeroTrustAccessMtlsCertificatesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_mtls_certificates cloudflare_zero_trust_access_mtls_certificates}
*/
export class DataCloudflareZeroTrustAccessMtlsCertificates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_zero_trust_access_mtls_certificates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflareZeroTrustAccessMtlsCertificates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustAccessMtlsCertificates to import
  * @param importFromId The id of the existing DataCloudflareZeroTrustAccessMtlsCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_mtls_certificates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustAccessMtlsCertificates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_access_mtls_certificates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/zero_trust_access_mtls_certificates cloudflare_zero_trust_access_mtls_certificates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflareZeroTrustAccessMtlsCertificatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudflareZeroTrustAccessMtlsCertificatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_zero_trust_access_mtls_certificates',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.14.0',
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
    this._maxItems = config.maxItems;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

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

  // result - computed: true, optional: false, required: false
  private _result = new DataCloudflareZeroTrustAccessMtlsCertificatesResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
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
      account_id: cdktf.stringToTerraform(this._accountId),
      max_items: cdktf.numberToTerraform(this._maxItems),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      max_items: {
        value: cdktf.numberToHclTerraform(this._maxItems),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
