# `dataCloudflareZeroTrustTunnelWarpConnectors` Submodule <a name="`dataCloudflareZeroTrustTunnelWarpConnectors` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectors <a name="DataCloudflareZeroTrustTunnelWarpConnectors" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors cloudflare_zero_trust_tunnel_warp_connectors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  exclude_prefix: str = None,
  existed_at: str = None,
  include_prefix: str = None,
  is_deleted: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.excludePrefix">exclude_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.existedAt">existed_at</a></code> | <code>str</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.includePrefix">include_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-friendly name for the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.uuid">uuid</a></code> | <code>str</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.wasActiveAt">was_active_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.wasInactiveAt">was_inactive_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#account_id DataCloudflareZeroTrustTunnelWarpConnectors#account_id}

---

##### `exclude_prefix`<sup>Optional</sup> <a name="exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.excludePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}.

---

##### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.existedAt"></a>

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#existed_at DataCloudflareZeroTrustTunnelWarpConnectors#existed_at}

---

##### `include_prefix`<sup>Optional</sup> <a name="include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.includePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}.

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.isDeleted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#is_deleted DataCloudflareZeroTrustTunnelWarpConnectors#is_deleted}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.maxItems"></a>

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#max_items DataCloudflareZeroTrustTunnelWarpConnectors#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.name"></a>

- *Type:* str

A user-friendly name for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#name DataCloudflareZeroTrustTunnelWarpConnectors#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.status"></a>

- *Type:* str

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#status DataCloudflareZeroTrustTunnelWarpConnectors#status}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.uuid"></a>

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#uuid DataCloudflareZeroTrustTunnelWarpConnectors#uuid}

---

##### `was_active_at`<sup>Optional</sup> <a name="was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.wasActiveAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}.

---

##### `was_inactive_at`<sup>Optional</sup> <a name="was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.Initializer.parameter.wasInactiveAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExcludePrefix">reset_exclude_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExistedAt">reset_existed_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIncludePrefix">reset_include_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIsDeleted">reset_is_deleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetMaxItems">reset_max_items</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetUuid">reset_uuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasActiveAt">reset_was_active_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasInactiveAt">reset_was_inactive_at</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_exclude_prefix` <a name="reset_exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExcludePrefix"></a>

```python
def reset_exclude_prefix() -> None
```

##### `reset_existed_at` <a name="reset_existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetExistedAt"></a>

```python
def reset_existed_at() -> None
```

##### `reset_include_prefix` <a name="reset_include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIncludePrefix"></a>

```python
def reset_include_prefix() -> None
```

##### `reset_is_deleted` <a name="reset_is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetIsDeleted"></a>

```python
def reset_is_deleted() -> None
```

##### `reset_max_items` <a name="reset_max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetMaxItems"></a>

```python
def reset_max_items() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetUuid"></a>

```python
def reset_uuid() -> None
```

##### `reset_was_active_at` <a name="reset_was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasActiveAt"></a>

```python
def reset_was_active_at() -> None
```

##### `reset_was_inactive_at` <a name="reset_was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.resetWasInactiveAt"></a>

```python
def reset_was_inactive_at() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustTunnelWarpConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustTunnelWarpConnectors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustTunnelWarpConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustTunnelWarpConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList">DataCloudflareZeroTrustTunnelWarpConnectorsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefixInput">exclude_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAtInput">existed_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefixInput">include_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeletedInput">is_deleted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItemsInput">max_items_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAtInput">was_active_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAtInput">was_inactive_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefix">exclude_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAt">existed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefix">include_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAt">was_active_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAt">was_inactive_at</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.result"></a>

```python
result: DataCloudflareZeroTrustTunnelWarpConnectorsResultList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList">DataCloudflareZeroTrustTunnelWarpConnectorsResultList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `exclude_prefix_input`<sup>Optional</sup> <a name="exclude_prefix_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefixInput"></a>

```python
exclude_prefix_input: str
```

- *Type:* str

---

##### `existed_at_input`<sup>Optional</sup> <a name="existed_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAtInput"></a>

```python
existed_at_input: str
```

- *Type:* str

---

##### `include_prefix_input`<sup>Optional</sup> <a name="include_prefix_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefixInput"></a>

```python
include_prefix_input: str
```

- *Type:* str

---

##### `is_deleted_input`<sup>Optional</sup> <a name="is_deleted_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeletedInput"></a>

```python
is_deleted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_items_input`<sup>Optional</sup> <a name="max_items_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItemsInput"></a>

```python
max_items_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `was_active_at_input`<sup>Optional</sup> <a name="was_active_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAtInput"></a>

```python
was_active_at_input: str
```

- *Type:* str

---

##### `was_inactive_at_input`<sup>Optional</sup> <a name="was_inactive_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAtInput"></a>

```python
was_inactive_at_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `exclude_prefix`<sup>Required</sup> <a name="exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.excludePrefix"></a>

```python
exclude_prefix: str
```

- *Type:* str

---

##### `existed_at`<sup>Required</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

---

##### `include_prefix`<sup>Required</sup> <a name="include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.includePrefix"></a>

```python
include_prefix: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.isDeleted"></a>

```python
is_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_items`<sup>Required</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `was_active_at`<sup>Required</sup> <a name="was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasActiveAt"></a>

```python
was_active_at: str
```

- *Type:* str

---

##### `was_inactive_at`<sup>Required</sup> <a name="was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.wasInactiveAt"></a>

```python
was_inactive_at: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorsConfig <a name="DataCloudflareZeroTrustTunnelWarpConnectorsConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  exclude_prefix: str = None,
  existed_at: str = None,
  include_prefix: str = None,
  is_deleted: typing.Union[bool, IResolvable] = None,
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
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.excludePrefix">exclude_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.existedAt">existed_at</a></code> | <code>str</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.includePrefix">include_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.isDeleted">is_deleted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.maxItems">max_items</a></code> | <code>typing.Union[int, float]</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.name">name</a></code> | <code>str</code> | A user-friendly name for the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.status">status</a></code> | <code>str</code> | The status of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.uuid">uuid</a></code> | <code>str</code> | UUID of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasActiveAt">was_active_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasInactiveAt">was_inactive_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#account_id DataCloudflareZeroTrustTunnelWarpConnectors#account_id}

---

##### `exclude_prefix`<sup>Optional</sup> <a name="exclude_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.excludePrefix"></a>

```python
exclude_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#exclude_prefix DataCloudflareZeroTrustTunnelWarpConnectors#exclude_prefix}.

---

##### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#existed_at DataCloudflareZeroTrustTunnelWarpConnectors#existed_at}

---

##### `include_prefix`<sup>Optional</sup> <a name="include_prefix" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.includePrefix"></a>

```python
include_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#include_prefix DataCloudflareZeroTrustTunnelWarpConnectors#include_prefix}.

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.isDeleted"></a>

```python
is_deleted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If `true`, only include deleted tunnels. If `false`, exclude deleted tunnels. If empty, all tunnels will be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#is_deleted DataCloudflareZeroTrustTunnelWarpConnectors#is_deleted}

---

##### `max_items`<sup>Optional</sup> <a name="max_items" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.maxItems"></a>

```python
max_items: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#max_items DataCloudflareZeroTrustTunnelWarpConnectors#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-friendly name for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#name DataCloudflareZeroTrustTunnelWarpConnectors#name}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the tunnel.

Valid values are `inactive` (tunnel has never been run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy state), `healthy` (tunnel is active and able to serve traffic), or `down` (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
Available values: "inactive", "degraded", "healthy", "down".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#status DataCloudflareZeroTrustTunnelWarpConnectors#status}

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#uuid DataCloudflareZeroTrustTunnelWarpConnectors#uuid}

---

##### `was_active_at`<sup>Optional</sup> <a name="was_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasActiveAt"></a>

```python
was_active_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#was_active_at DataCloudflareZeroTrustTunnelWarpConnectors#was_active_at}.

---

##### `was_inactive_at`<sup>Optional</sup> <a name="was_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsConfig.property.wasInactiveAt"></a>

```python
was_inactive_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/zero_trust_tunnel_warp_connectors#was_inactive_at DataCloudflareZeroTrustTunnelWarpConnectors#was_inactive_at}.

---

### DataCloudflareZeroTrustTunnelWarpConnectorsResult <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult()
```


### DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections()
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientVersion">client_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.coloName">colo_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.isPendingReconnect">is_pending_reconnect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.openedAt">opened_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.originIp">origin_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_version`<sup>Required</sup> <a name="client_version" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.clientVersion"></a>

```python
client_version: str
```

- *Type:* str

---

##### `colo_name`<sup>Required</sup> <a name="colo_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.coloName"></a>

```python
colo_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_pending_reconnect`<sup>Required</sup> <a name="is_pending_reconnect" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.isPendingReconnect"></a>

```python
is_pending_reconnect: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `opened_at`<sup>Required</sup> <a name="opened_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.openedAt"></a>

```python
opened_at: str
```

- *Type:* str

---

##### `origin_ip`<sup>Required</sup> <a name="origin_ip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.originIp"></a>

```python
origin_ip: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnections</a>

---


### DataCloudflareZeroTrustTunnelWarpConnectorsResultList <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference <a name="DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_tunnel_warp_connectors

dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.accountTag">account_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsActiveAt">conns_active_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsInactiveAt">conns_inactive_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.remoteConfig">remote_config</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.tunType">tun_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult">DataCloudflareZeroTrustTunnelWarpConnectorsResult</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_tag`<sup>Required</sup> <a name="account_tag" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.accountTag"></a>

```python
account_tag: str
```

- *Type:* str

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connections"></a>

```python
connections: DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList">DataCloudflareZeroTrustTunnelWarpConnectorsResultConnectionsList</a>

---

##### `conns_active_at`<sup>Required</sup> <a name="conns_active_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsActiveAt"></a>

```python
conns_active_at: str
```

- *Type:* str

---

##### `conns_inactive_at`<sup>Required</sup> <a name="conns_inactive_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.connsInactiveAt"></a>

```python
conns_inactive_at: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_config`<sup>Required</sup> <a name="remote_config" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.remoteConfig"></a>

```python
remote_config: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tun_type`<sup>Required</sup> <a name="tun_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.tunType"></a>

```python
tun_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResultOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareZeroTrustTunnelWarpConnectorsResult
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustTunnelWarpConnectors.DataCloudflareZeroTrustTunnelWarpConnectorsResult">DataCloudflareZeroTrustTunnelWarpConnectorsResult</a>

---



