/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/page_shield_scripts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudflarePageShieldScriptsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/page_shield_scripts#script_id DataCloudflarePageShieldScripts#script_id}
  */
  readonly scriptId: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/page_shield_scripts#zone_id DataCloudflarePageShieldScripts#zone_id}
  */
  readonly zoneId: string;
}
export interface DataCloudflarePageShieldScriptsVersions {
}

export function dataCloudflarePageShieldScriptsVersionsToTerraform(struct?: DataCloudflarePageShieldScriptsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCloudflarePageShieldScriptsVersionsToHclTerraform(struct?: DataCloudflarePageShieldScriptsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCloudflarePageShieldScriptsVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCloudflarePageShieldScriptsVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCloudflarePageShieldScriptsVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cryptomining_score - computed: true, optional: false, required: false
  public get cryptominingScore() {
    return this.getNumberAttribute('cryptomining_score');
  }

  // dataflow_score - computed: true, optional: false, required: false
  public get dataflowScore() {
    return this.getNumberAttribute('dataflow_score');
  }

  // fetched_at - computed: true, optional: false, required: false
  public get fetchedAt() {
    return this.getStringAttribute('fetched_at');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // js_integrity_score - computed: true, optional: false, required: false
  public get jsIntegrityScore() {
    return this.getNumberAttribute('js_integrity_score');
  }

  // magecart_score - computed: true, optional: false, required: false
  public get magecartScore() {
    return this.getNumberAttribute('magecart_score');
  }

  // malware_score - computed: true, optional: false, required: false
  public get malwareScore() {
    return this.getNumberAttribute('malware_score');
  }

  // obfuscation_score - computed: true, optional: false, required: false
  public get obfuscationScore() {
    return this.getNumberAttribute('obfuscation_score');
  }
}

export class DataCloudflarePageShieldScriptsVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCloudflarePageShieldScriptsVersionsOutputReference {
    return new DataCloudflarePageShieldScriptsVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts}
*/
export class DataCloudflarePageShieldScripts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_page_shield_scripts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudflarePageShieldScripts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudflarePageShieldScripts to import
  * @param importFromId The id of the existing DataCloudflarePageShieldScripts that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/page_shield_scripts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudflarePageShieldScripts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_page_shield_scripts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/page_shield_scripts cloudflare_page_shield_scripts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudflarePageShieldScriptsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCloudflarePageShieldScriptsConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_page_shield_scripts',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.12.0',
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
    this._scriptId = config.scriptId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // added_at - computed: true, optional: false, required: false
  public get addedAt() {
    return this.getStringAttribute('added_at');
  }

  // cryptomining_score - computed: true, optional: false, required: false
  public get cryptominingScore() {
    return this.getNumberAttribute('cryptomining_score');
  }

  // dataflow_score - computed: true, optional: false, required: false
  public get dataflowScore() {
    return this.getNumberAttribute('dataflow_score');
  }

  // domain_reported_malicious - computed: true, optional: false, required: false
  public get domainReportedMalicious() {
    return this.getBooleanAttribute('domain_reported_malicious');
  }

  // fetched_at - computed: true, optional: false, required: false
  public get fetchedAt() {
    return this.getStringAttribute('fetched_at');
  }

  // first_page_url - computed: true, optional: false, required: false
  public get firstPageUrl() {
    return this.getStringAttribute('first_page_url');
  }

  // first_seen_at - computed: true, optional: false, required: false
  public get firstSeenAt() {
    return this.getStringAttribute('first_seen_at');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // js_integrity_score - computed: true, optional: false, required: false
  public get jsIntegrityScore() {
    return this.getNumberAttribute('js_integrity_score');
  }

  // last_seen_at - computed: true, optional: false, required: false
  public get lastSeenAt() {
    return this.getStringAttribute('last_seen_at');
  }

  // magecart_score - computed: true, optional: false, required: false
  public get magecartScore() {
    return this.getNumberAttribute('magecart_score');
  }

  // malicious_domain_categories - computed: true, optional: false, required: false
  public get maliciousDomainCategories() {
    return this.getListAttribute('malicious_domain_categories');
  }

  // malicious_url_categories - computed: true, optional: false, required: false
  public get maliciousUrlCategories() {
    return this.getListAttribute('malicious_url_categories');
  }

  // malware_score - computed: true, optional: false, required: false
  public get malwareScore() {
    return this.getNumberAttribute('malware_score');
  }

  // obfuscation_score - computed: true, optional: false, required: false
  public get obfuscationScore() {
    return this.getNumberAttribute('obfuscation_score');
  }

  // page_urls - computed: true, optional: false, required: false
  public get pageUrls() {
    return this.getListAttribute('page_urls');
  }

  // script_id - computed: false, optional: false, required: true
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // url_contains_cdn_cgi_path - computed: true, optional: false, required: false
  public get urlContainsCdnCgiPath() {
    return this.getBooleanAttribute('url_contains_cdn_cgi_path');
  }

  // url_reported_malicious - computed: true, optional: false, required: false
  public get urlReportedMalicious() {
    return this.getBooleanAttribute('url_reported_malicious');
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataCloudflarePageShieldScriptsVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
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
      script_id: cdktf.stringToTerraform(this._scriptId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      script_id: {
        value: cdktf.stringToHclTerraform(this._scriptId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
