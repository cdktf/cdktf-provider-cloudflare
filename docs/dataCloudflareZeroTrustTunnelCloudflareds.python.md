# `dataCloudflareZeroTrustTunnelCloudflareds` Submodule <a name="`dataCloudflareZeroTrustTunnelCloudflareds` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelCloudflareds <a name="DataCloudflareZeroTrustTunnelCloudflareds" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds cloudflare_zero_trust_tunnel_cloudflareds}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  exclude_prefix: str = None,
  existed_at: str = None,
  include_prefix: str = None,
  is_deleted: bool | IResolvable = None,
  max_items: typing.Union[int, float] = None,
  name: str = None,
  status: str = None,
  uuid: str = None,
  was_active_at: str = None,
  was_inactive_at: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.excludePrefix">exclude_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#exclude_prefix DataCloudflareZeroTrustTunnelCloudflareds#exclude_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.existedAt">existed_at</a></code> | <code>str</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.includePrefix">include_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#include_prefix DataCloudflareZeroTrustTunnelCloudflareds#include_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.isDeleted">is_deleted</a></code> | <code>bool \| cdktf.IResolvable</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.uuid">uuid</a></code> | <code>str</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.wasActiveAt">was_active_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_active_at DataCloudflareZeroTrustTunnelCloudflareds#was_active_at}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.wasInactiveAt">was_inactive_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_inactive_at DataCloudflareZeroTrustTunnelCloudflareds#was_inactive_at}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#account_id DataCloudflareZeroTrustTunnelCloudflareds#account_id}

---

##### `exclude_prefix`<sup>Optional</sup> <a name="exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.excludePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#exclude_prefix DataCloudflareZeroTrustTunnelCloudflareds#exclude_prefix}.

---

##### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.existedAt"></a>

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#existed_at DataCloudflareZeroTrustTunnelCloudflareds#existed_at}

---

##### `include_prefix`<sup>Optional</sup> <a name="include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.includePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#include_prefix DataCloudflareZeroTrustTunnelCloudflareds#include_prefix}.

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.isDeleted"></a>

- *Type:* bool | cdktf.IResolvable

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#is_deleted DataCloudflareZeroTrustTunnelCloudflareds#is_deleted}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#max_items DataCloudflareZeroTrustTunnelCloudflareds#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.name"></a>

- *Type:* str

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#name DataCloudflareZeroTrustTunnelCloudflareds#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.status"></a>

- *Type:* str

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#status DataCloudflareZeroTrustTunnelCloudflareds#status}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.uuid"></a>

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#uuid DataCloudflareZeroTrustTunnelCloudflareds#uuid}

---

##### `was_active_at`<sup>Optional</sup> <a name="was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.wasActiveAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_active_at DataCloudflareZeroTrustTunnelCloudflareds#was_active_at}.

---

##### `was_inactive_at`<sup>Optional</sup> <a name="was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.Initializer.parameter.wasInactiveAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_inactive_at DataCloudflareZeroTrustTunnelCloudflareds#was_inactive_at}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetExcludePrefix">reset_exclude_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetExistedAt">reset_existed_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetIncludePrefix">reset_include_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetIsDeleted">reset_is_deleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetUuid">reset_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetWasActiveAt">reset_was_active_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetWasInactiveAt">reset_was_inactive_at</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_exclude_prefix` <a name="reset_exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetExcludePrefix"></a>

```python
def reset_exclude_prefix() -> None
```

##### `reset_existed_at` <a name="reset_existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetExistedAt"></a>

```python
def reset_existed_at() -> None
```

##### `reset_include_prefix` <a name="reset_include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetIncludePrefix"></a>

```python
def reset_include_prefix() -> None
```

##### `reset_is_deleted` <a name="reset_is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetIsDeleted"></a>

```python
def reset_is_deleted() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetUuid"></a>

```python
def reset_uuid() -> None
```

##### `reset_was_active_at` <a name="reset_was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetWasActiveAt"></a>

```python
def reset_was_active_at() -> None
```

##### `reset_was_inactive_at` <a name="reset_was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.resetWasInactiveAt"></a>

```python
def reset_was_inactive_at() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflareds resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelCloudflareds resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelCloudflareds to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustTunnelCloudflareds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelCloudflareds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList">DataCloudflareZeroTrustTunnelCloudflaredsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.excludePrefixInput">exclude_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.existedAtInput">existed_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.includePrefixInput">include_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.isDeletedInput">is_deleted_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.wasActiveAtInput">was_active_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.wasInactiveAtInput">was_inactive_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.excludePrefix">exclude_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.existedAt">existed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.includePrefix">include_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.isDeleted">is_deleted</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.wasActiveAt">was_active_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.wasInactiveAt">was_inactive_at</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.result"></a>

```python
result: DataCloudflareZeroTrustTunnelCloudflaredsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList">DataCloudflareZeroTrustTunnelCloudflaredsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `exclude_prefix_input`<sup>Optional</sup> <a name="exclude_prefix_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.excludePrefixInput"></a>

```python
exclude_prefix_input: str
```

- *Type:* str

---

##### `existed_at_input`<sup>Optional</sup> <a name="existed_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.existedAtInput"></a>

```python
existed_at_input: str
```

- *Type:* str

---

##### `include_prefix_input`<sup>Optional</sup> <a name="include_prefix_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.includePrefixInput"></a>

```python
include_prefix_input: str
```

- *Type:* str

---

##### `is_deleted_input`<sup>Optional</sup> <a name="is_deleted_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.isDeletedInput"></a>

```python
is_deleted_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `was_active_at_input`<sup>Optional</sup> <a name="was_active_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.wasActiveAtInput"></a>

```python
was_active_at_input: str
```

- *Type:* str

---

##### `was_inactive_at_input`<sup>Optional</sup> <a name="was_inactive_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.wasInactiveAtInput"></a>

```python
was_inactive_at_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `exclude_prefix`<sup>Required</sup> <a name="exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.excludePrefix"></a>

```python
exclude_prefix: str
```

- *Type:* str

---

##### `existed_at`<sup>Required</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

---

##### `include_prefix`<sup>Required</sup> <a name="include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.includePrefix"></a>

```python
include_prefix: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.isDeleted"></a>

```python
is_deleted: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `was_active_at`<sup>Required</sup> <a name="was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.wasActiveAt"></a>

```python
was_active_at: str
```

- *Type:* str

---

##### `was_inactive_at`<sup>Required</sup> <a name="was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.wasInactiveAt"></a>

```python
was_inactive_at: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflareds.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelCloudflaredsConfig <a name="DataCloudflareZeroTrustTunnelCloudflaredsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  exclude_prefix: str = None,
  existed_at: str = None,
  include_prefix: str = None,
  is_deleted: bool | IResolvable = None,
  max_items: typing.Union[int, float] = None,
  name: str = None,
  status: str = None,
  uuid: str = None,
  was_active_at: str = None,
  was_inactive_at: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.excludePrefix">exclude_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#exclude_prefix DataCloudflareZeroTrustTunnelCloudflareds#exclude_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.existedAt">existed_at</a></code> | <code>str</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.includePrefix">include_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#include_prefix DataCloudflareZeroTrustTunnelCloudflareds#include_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.isDeleted">is_deleted</a></code> | <code>bool \| cdktf.IResolvable</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.name">name</a></code> | <code>str</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.status">status</a></code> | <code>str</code> | The status of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.uuid">uuid</a></code> | <code>str</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.wasActiveAt">was_active_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_active_at DataCloudflareZeroTrustTunnelCloudflareds#was_active_at}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.wasInactiveAt">was_inactive_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_inactive_at DataCloudflareZeroTrustTunnelCloudflareds#was_inactive_at}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#account_id DataCloudflareZeroTrustTunnelCloudflareds#account_id}

---

##### `exclude_prefix`<sup>Optional</sup> <a name="exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.excludePrefix"></a>

```python
exclude_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#exclude_prefix DataCloudflareZeroTrustTunnelCloudflareds#exclude_prefix}.

---

##### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#existed_at DataCloudflareZeroTrustTunnelCloudflareds#existed_at}

---

##### `include_prefix`<sup>Optional</sup> <a name="include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.includePrefix"></a>

```python
include_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#include_prefix DataCloudflareZeroTrustTunnelCloudflareds#include_prefix}.

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.isDeleted"></a>

```python
is_deleted: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#is_deleted DataCloudflareZeroTrustTunnelCloudflareds#is_deleted}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#max_items DataCloudflareZeroTrustTunnelCloudflareds#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#name DataCloudflareZeroTrustTunnelCloudflareds#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#status DataCloudflareZeroTrustTunnelCloudflareds#status}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#uuid DataCloudflareZeroTrustTunnelCloudflareds#uuid}

---

##### `was_active_at`<sup>Optional</sup> <a name="was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.wasActiveAt"></a>

```python
was_active_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_active_at DataCloudflareZeroTrustTunnelCloudflareds#was_active_at}.

---

##### `was_inactive_at`<sup>Optional</sup> <a name="was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsConfig.property.wasInactiveAt"></a>

```python
was_inactive_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_tunnel_cloudflareds#was_inactive_at DataCloudflareZeroTrustTunnelCloudflareds#was_inactive_at}.

---

### DataCloudflareZeroTrustTunnelCloudflaredsResult <a name="DataCloudflareZeroTrustTunnelCloudflaredsResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResult()
```


### DataCloudflareZeroTrustTunnelCloudflaredsResultConnections <a name="DataCloudflareZeroTrustTunnelCloudflaredsResultConnections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnections()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList <a name="DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.coloName">colo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.isPendingReconnect">is_pending_reconnect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.openedAt">opened_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.originIp">origin_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnections">DataCloudflareZeroTrustTunnelCloudflaredsResultConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `colo_name`<sup>Required</sup> <a name="colo_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.coloName"></a>

```python
colo_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_pending_reconnect`<sup>Required</sup> <a name="is_pending_reconnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.isPendingReconnect"></a>

```python
is_pending_reconnect: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `opened_at`<sup>Required</sup> <a name="opened_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.openedAt"></a>

```python
opened_at: str
```

- *Type:* str

---

##### `origin_ip`<sup>Required</sup> <a name="origin_ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.originIp"></a>

```python
origin_ip: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelCloudflaredsResultConnections
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnections">DataCloudflareZeroTrustTunnelCloudflaredsResultConnections</a>

---


### DataCloudflareZeroTrustTunnelCloudflaredsResultList <a name="DataCloudflareZeroTrustTunnelCloudflaredsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference <a name="DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_cloudflareds

dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.accountTag">account_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.configSrc">config_src</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList">DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.connsActiveAt">conns_active_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.connsInactiveAt">conns_inactive_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.remoteConfig">remote_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.tunType">tun_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResult">DataCloudflareZeroTrustTunnelCloudflaredsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_tag`<sup>Required</sup> <a name="account_tag" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.accountTag"></a>

```python
account_tag: str
```

- *Type:* str

---

##### `config_src`<sup>Required</sup> <a name="config_src" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.configSrc"></a>

```python
config_src: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.connections"></a>

```python
connections: DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList">DataCloudflareZeroTrustTunnelCloudflaredsResultConnectionsList</a>

---

##### `conns_active_at`<sup>Required</sup> <a name="conns_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.connsActiveAt"></a>

```python
conns_active_at: str
```

- *Type:* str

---

##### `conns_inactive_at`<sup>Required</sup> <a name="conns_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.connsInactiveAt"></a>

```python
conns_inactive_at: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_config`<sup>Required</sup> <a name="remote_config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.remoteConfig"></a>

```python
remote_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tun_type`<sup>Required</sup> <a name="tun_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.tunType"></a>

```python
tun_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelCloudflaredsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelCloudflareds.DataCloudflareZeroTrustTunnelCloudflaredsResult">DataCloudflareZeroTrustTunnelCloudflaredsResult</a>

---



