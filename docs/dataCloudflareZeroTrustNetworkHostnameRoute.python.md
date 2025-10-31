# `dataCloudflareZeroTrustNetworkHostnameRoute` Submodule <a name="`dataCloudflareZeroTrustNetworkHostnameRoute` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustNetworkHostnameRoute <a name="DataCloudflareZeroTrustNetworkHostnameRoute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route cloudflare_zero_trust_network_hostname_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_network_hostname_route

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute(
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
  filter: DataCloudflareZeroTrustNetworkHostnameRouteFilter = None,
  hostname_route_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.hostnameRouteId">hostname_route_id</a></code> | <code>str</code> | The hostname route ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#account_id DataCloudflareZeroTrustNetworkHostnameRoute#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}.

---

##### `hostname_route_id`<sup>Optional</sup> <a name="hostname_route_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.Initializer.parameter.hostnameRouteId"></a>

- *Type:* str

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#hostname_route_id DataCloudflareZeroTrustNetworkHostnameRoute#hostname_route_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetHostnameRouteId">reset_hostname_route_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter"></a>

```python
def put_filter(
  comment: str = None,
  existed_at: str = None,
  hostname: str = None,
  id: str = None,
  is_deleted: bool | IResolvable = None,
  tunnel_id: str = None
) -> None
```

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter.parameter.comment"></a>

- *Type:* str

If set, only list hostname routes with the given comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#comment DataCloudflareZeroTrustNetworkHostnameRoute#comment}

---

###### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter.parameter.existedAt"></a>

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#existed_at DataCloudflareZeroTrustNetworkHostnameRoute#existed_at}

---

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter.parameter.hostname"></a>

- *Type:* str

If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#hostname DataCloudflareZeroTrustNetworkHostnameRoute#hostname}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter.parameter.id"></a>

- *Type:* str

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#id DataCloudflareZeroTrustNetworkHostnameRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter.parameter.isDeleted"></a>

- *Type:* bool | cdktf.IResolvable

If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#is_deleted DataCloudflareZeroTrustNetworkHostnameRoute#is_deleted}

---

###### `tunnel_id`<sup>Optional</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.putFilter.parameter.tunnelId"></a>

- *Type:* str

If set, only list hostname routes that point to a specific tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoute#tunnel_id}

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_hostname_route_id` <a name="reset_hostname_route_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.resetHostnameRouteId"></a>

```python
def reset_hostname_route_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_network_hostname_route

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_network_hostname_route

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_network_hostname_route

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_network_hostname_route

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustNetworkHostnameRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareZeroTrustNetworkHostnameRoute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareZeroTrustNetworkHostnameRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustNetworkHostnameRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.deletedAt">deleted_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference">DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelName">tunnel_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filterInput">filter_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteIdInput">hostname_route_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteId">hostname_route_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deleted_at`<sup>Required</sup> <a name="deleted_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.deletedAt"></a>

```python
deleted_at: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filter"></a>

```python
filter: DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference">DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `tunnel_name`<sup>Required</sup> <a name="tunnel_name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tunnelName"></a>

```python
tunnel_name: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.filterInput"></a>

```python
filter_input: IResolvable | DataCloudflareZeroTrustNetworkHostnameRouteFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

---

##### `hostname_route_id_input`<sup>Optional</sup> <a name="hostname_route_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteIdInput"></a>

```python
hostname_route_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `hostname_route_id`<sup>Required</sup> <a name="hostname_route_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.hostnameRouteId"></a>

```python
hostname_route_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustNetworkHostnameRouteConfig <a name="DataCloudflareZeroTrustNetworkHostnameRouteConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_network_hostname_route

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  filter: DataCloudflareZeroTrustNetworkHostnameRouteFilter = None,
  hostname_route_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.hostnameRouteId">hostname_route_id</a></code> | <code>str</code> | The hostname route ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#account_id DataCloudflareZeroTrustNetworkHostnameRoute#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.filter"></a>

```python
filter: DataCloudflareZeroTrustNetworkHostnameRouteFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#filter DataCloudflareZeroTrustNetworkHostnameRoute#filter}.

---

##### `hostname_route_id`<sup>Optional</sup> <a name="hostname_route_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteConfig.property.hostnameRouteId"></a>

```python
hostname_route_id: str
```

- *Type:* str

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#hostname_route_id DataCloudflareZeroTrustNetworkHostnameRoute#hostname_route_id}

---

### DataCloudflareZeroTrustNetworkHostnameRouteFilter <a name="DataCloudflareZeroTrustNetworkHostnameRouteFilter" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_network_hostname_route

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter(
  comment: str = None,
  existed_at: str = None,
  hostname: str = None,
  id: str = None,
  is_deleted: bool | IResolvable = None,
  tunnel_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.comment">comment</a></code> | <code>str</code> | If set, only list hostname routes with the given comment. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.existedAt">existed_at</a></code> | <code>str</code> | If provided, include only resources that were created (and not deleted) before this time. URL encoded. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.hostname">hostname</a></code> | <code>str</code> | If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.id">id</a></code> | <code>str</code> | The hostname route ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.isDeleted">is_deleted</a></code> | <code>bool \| cdktf.IResolvable</code> | If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.tunnelId">tunnel_id</a></code> | <code>str</code> | If set, only list hostname routes that point to a specific tunnel. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.comment"></a>

```python
comment: str
```

- *Type:* str

If set, only list hostname routes with the given comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#comment DataCloudflareZeroTrustNetworkHostnameRoute#comment}

---

##### `existed_at`<sup>Optional</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

If provided, include only resources that were created (and not deleted) before this time. URL encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#existed_at DataCloudflareZeroTrustNetworkHostnameRoute#existed_at}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

If set, only list hostname routes that contain a substring of the given value, the filter is case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#hostname DataCloudflareZeroTrustNetworkHostnameRoute#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.id"></a>

```python
id: str
```

- *Type:* str

The hostname route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#id DataCloudflareZeroTrustNetworkHostnameRoute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_deleted`<sup>Optional</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.isDeleted"></a>

```python
is_deleted: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If `true`, only return deleted hostname routes. If `false`, exclude deleted hostname routes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#is_deleted DataCloudflareZeroTrustNetworkHostnameRoute#is_deleted}

---

##### `tunnel_id`<sup>Optional</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

If set, only list hostname routes that point to a specific tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.12.0/docs/data-sources/zero_trust_network_hostname_route#tunnel_id DataCloudflareZeroTrustNetworkHostnameRoute#tunnel_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference <a name="DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_zero_trust_network_hostname_route

dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetExistedAt">reset_existed_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetIsDeleted">reset_is_deleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetTunnelId">reset_tunnel_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_existed_at` <a name="reset_existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetExistedAt"></a>

```python
def reset_existed_at() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_deleted` <a name="reset_is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetIsDeleted"></a>

```python
def reset_is_deleted() -> None
```

##### `reset_tunnel_id` <a name="reset_tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.resetTunnelId"></a>

```python
def reset_tunnel_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAtInput">existed_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeletedInput">is_deleted_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelIdInput">tunnel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAt">existed_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeleted">is_deleted</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelId">tunnel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `existed_at_input`<sup>Optional</sup> <a name="existed_at_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAtInput"></a>

```python
existed_at_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_deleted_input`<sup>Optional</sup> <a name="is_deleted_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeletedInput"></a>

```python
is_deleted_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tunnel_id_input`<sup>Optional</sup> <a name="tunnel_id_input" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelIdInput"></a>

```python
tunnel_id_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `existed_at`<sup>Required</sup> <a name="existed_at" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.existedAt"></a>

```python
existed_at: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.isDeleted"></a>

```python
is_deleted: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tunnel_id`<sup>Required</sup> <a name="tunnel_id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.tunnelId"></a>

```python
tunnel_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataCloudflareZeroTrustNetworkHostnameRouteFilter
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustNetworkHostnameRoute.DataCloudflareZeroTrustNetworkHostnameRouteFilter">DataCloudflareZeroTrustNetworkHostnameRouteFilter</a>

---



