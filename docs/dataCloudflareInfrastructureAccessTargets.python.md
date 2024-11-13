# `dataCloudflareInfrastructureAccessTargets` Submodule <a name="`dataCloudflareInfrastructureAccessTargets` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareInfrastructureAccessTargets <a name="DataCloudflareInfrastructureAccessTargets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets cloudflare_infrastructure_access_targets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets(
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
  created_after: str = None,
  hostname: str = None,
  hostname_contains: str = None,
  ipv4: str = None,
  ipv6: str = None,
  modified_after: str = None,
  virtual_network_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.createdAfter">created_after</a></code> | <code>str</code> | A date and time after a target was created to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | The hostname of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.hostnameContains">hostname_contains</a></code> | <code>str</code> | Partial match to the hostname of a target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.ipv4">ipv4</a></code> | <code>str</code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.ipv6">ipv6</a></code> | <code>str</code> | The target's IPv6 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.modifiedAfter">modified_after</a></code> | <code>str</code> | A date and time after a target was modified to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | The private virtual network identifier for the target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#account_id DataCloudflareInfrastructureAccessTargets#account_id}

---

##### `created_after`<sup>Optional</sup> <a name="created_after" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.createdAfter"></a>

- *Type:* str

A date and time after a target was created to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#created_after DataCloudflareInfrastructureAccessTargets#created_after}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.hostname"></a>

- *Type:* str

The hostname of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#hostname DataCloudflareInfrastructureAccessTargets#hostname}

---

##### `hostname_contains`<sup>Optional</sup> <a name="hostname_contains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.hostnameContains"></a>

- *Type:* str

Partial match to the hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#hostname_contains DataCloudflareInfrastructureAccessTargets#hostname_contains}

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.ipv4"></a>

- *Type:* str

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.ipv6"></a>

- *Type:* str

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

##### `modified_after`<sup>Optional</sup> <a name="modified_after" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.modifiedAfter"></a>

- *Type:* str

A date and time after a target was modified to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#modified_after DataCloudflareInfrastructureAccessTargets#modified_after}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.Initializer.parameter.virtualNetworkId"></a>

- *Type:* str

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetCreatedAfter">reset_created_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostnameContains">reset_hostname_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv4">reset_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv6">reset_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetModifiedAfter">reset_modified_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_created_after` <a name="reset_created_after" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetCreatedAfter"></a>

```python
def reset_created_after() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_hostname_contains` <a name="reset_hostname_contains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetHostnameContains"></a>

```python
def reset_hostname_contains() -> None
```

##### `reset_ipv4` <a name="reset_ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv4"></a>

```python
def reset_ipv4() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetIpv6"></a>

```python
def reset_ipv6() -> None
```

##### `reset_modified_after` <a name="reset_modified_after" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetModifiedAfter"></a>

```python
def reset_modified_after() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareInfrastructureAccessTargets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareInfrastructureAccessTargets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareInfrastructureAccessTargets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareInfrastructureAccessTargets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList">DataCloudflareInfrastructureAccessTargetsTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfterInput">created_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContainsInput">hostname_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4Input">ipv4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6Input">ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfterInput">modified_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfter">created_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContains">hostname_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4">ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6">ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfter">modified_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.targets"></a>

```python
targets: DataCloudflareInfrastructureAccessTargetsTargetsList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList">DataCloudflareInfrastructureAccessTargetsTargetsList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `created_after_input`<sup>Optional</sup> <a name="created_after_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfterInput"></a>

```python
created_after_input: str
```

- *Type:* str

---

##### `hostname_contains_input`<sup>Optional</sup> <a name="hostname_contains_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContainsInput"></a>

```python
hostname_contains_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `ipv4_input`<sup>Optional</sup> <a name="ipv4_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4Input"></a>

```python
ipv4_input: str
```

- *Type:* str

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6Input"></a>

```python
ipv6_input: str
```

- *Type:* str

---

##### `modified_after_input`<sup>Optional</sup> <a name="modified_after_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfterInput"></a>

```python
modified_after_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `created_after`<sup>Required</sup> <a name="created_after" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.createdAfter"></a>

```python
created_after: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `hostname_contains`<sup>Required</sup> <a name="hostname_contains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.hostnameContains"></a>

```python
hostname_contains: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

---

##### `modified_after`<sup>Required</sup> <a name="modified_after" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.modifiedAfter"></a>

```python
modified_after: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareInfrastructureAccessTargetsConfig <a name="DataCloudflareInfrastructureAccessTargetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  created_after: str = None,
  hostname: str = None,
  hostname_contains: str = None,
  ipv4: str = None,
  ipv6: str = None,
  modified_after: str = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.createdAfter">created_after</a></code> | <code>str</code> | A date and time after a target was created to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostname">hostname</a></code> | <code>str</code> | The hostname of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostnameContains">hostname_contains</a></code> | <code>str</code> | Partial match to the hostname of a target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv4">ipv4</a></code> | <code>str</code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv6">ipv6</a></code> | <code>str</code> | The target's IPv6 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.modifiedAfter">modified_after</a></code> | <code>str</code> | A date and time after a target was modified to filter on. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | The private virtual network identifier for the target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#account_id DataCloudflareInfrastructureAccessTargets#account_id}

---

##### `created_after`<sup>Optional</sup> <a name="created_after" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.createdAfter"></a>

```python
created_after: str
```

- *Type:* str

A date and time after a target was created to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#created_after DataCloudflareInfrastructureAccessTargets#created_after}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The hostname of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#hostname DataCloudflareInfrastructureAccessTargets#hostname}

---

##### `hostname_contains`<sup>Optional</sup> <a name="hostname_contains" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.hostnameContains"></a>

```python
hostname_contains: str
```

- *Type:* str

Partial match to the hostname of a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#hostname_contains DataCloudflareInfrastructureAccessTargets#hostname_contains}

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv4"></a>

```python
ipv4: str
```

- *Type:* str

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.ipv6"></a>

```python
ipv6: str
```

- *Type:* str

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

##### `modified_after`<sup>Optional</sup> <a name="modified_after" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.modifiedAfter"></a>

```python
modified_after: str
```

- *Type:* str

A date and time after a target was modified to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#modified_after DataCloudflareInfrastructureAccessTargets#modified_after}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsConfig.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareInfrastructureAccessTargetsTargets <a name="DataCloudflareInfrastructureAccessTargetsTargets" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets(
  ip: DataCloudflareInfrastructureAccessTargetsTargetsIp
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets.property.ip"></a>

```python
ip: DataCloudflareInfrastructureAccessTargetsTargetsIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ip DataCloudflareInfrastructureAccessTargets#ip}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIp <a name="DataCloudflareInfrastructureAccessTargetsTargetsIp" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp(
  ipv4: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 = None,
  ipv6: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a></code> | The target's IPv6 address. |

---

##### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv4"></a>

```python
ipv4: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

##### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp.property.ipv6"></a>

```python
ipv6: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4(
  ip_addr: str,
  virtual_network_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr">ip_addr</a></code> | <code>str</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | The private virtual network identifier for the target. |

---

##### `ip_addr`<sup>Required</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.ipAddr"></a>

```python
ip_addr: str
```

- *Type:* str

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6(
  ip_addr: str,
  virtual_network_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr">ip_addr</a></code> | <code>str</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | The private virtual network identifier for the target. |

---

##### `ip_addr`<sup>Required</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.ipAddr"></a>

```python
ip_addr: str
```

- *Type:* str

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput">ip_addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr">ip_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addr_input`<sup>Optional</sup> <a name="ip_addr_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddrInput"></a>

```python
ip_addr_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `ip_addr`<sup>Required</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.ipAddr"></a>

```python
ip_addr: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>]

---


### DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput">ip_addr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr">ip_addr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addr_input`<sup>Optional</sup> <a name="ip_addr_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddrInput"></a>

```python
ip_addr_input: str
```

- *Type:* str

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `ip_addr`<sup>Required</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.ipAddr"></a>

```python
ip_addr: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>]

---


### DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4">put_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6">put_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4">reset_ipv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6">reset_ipv6</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ipv4` <a name="put_ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4"></a>

```python
def put_ipv4(
  ip_addr: str,
  virtual_network_id: str
) -> None
```

###### `ip_addr`<sup>Required</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4.parameter.ipAddr"></a>

- *Type:* str

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

###### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv4.parameter.virtualNetworkId"></a>

- *Type:* str

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

##### `put_ipv6` <a name="put_ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6"></a>

```python
def put_ipv6(
  ip_addr: str,
  virtual_network_id: str
) -> None
```

###### `ip_addr`<sup>Required</sup> <a name="ip_addr" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6.parameter.ipAddr"></a>

- *Type:* str

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ip_addr DataCloudflareInfrastructureAccessTargets#ip_addr}

---

###### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.putIpv6.parameter.virtualNetworkId"></a>

- *Type:* str

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#virtual_network_id DataCloudflareInfrastructureAccessTargets#virtual_network_id}

---

##### `reset_ipv4` <a name="reset_ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv4"></a>

```python
def reset_ipv4() -> None
```

##### `reset_ipv6` <a name="reset_ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.resetIpv6"></a>

```python
def reset_ipv6() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6">ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input">ipv4_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input">ipv6_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4"></a>

```python
ipv4: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4OutputReference</a>

---

##### `ipv6`<sup>Required</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6"></a>

```python
ipv6: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6OutputReference</a>

---

##### `ipv4_input`<sup>Optional</sup> <a name="ipv4_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv4Input"></a>

```python
ipv4_input: typing.Union[IResolvable, DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>]

---

##### `ipv6_input`<sup>Optional</sup> <a name="ipv6_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.ipv6Input"></a>

```python
ipv6_input: typing.Union[IResolvable, DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareInfrastructureAccessTargetsTargetsIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---


### DataCloudflareInfrastructureAccessTargetsTargetsList <a name="DataCloudflareInfrastructureAccessTargetsTargetsList" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCloudflareInfrastructureAccessTargetsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataCloudflareInfrastructureAccessTargetsTargets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>]]

---


### DataCloudflareInfrastructureAccessTargetsTargetsOutputReference <a name="DataCloudflareInfrastructureAccessTargetsTargetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_infrastructure_access_targets

dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp">put_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip` <a name="put_ip" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp"></a>

```python
def put_ip(
  ipv4: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4 = None,
  ipv6: DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6 = None
) -> None
```

###### `ipv4`<sup>Optional</sup> <a name="ipv4" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp.parameter.ipv4"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ipv4 DataCloudflareInfrastructureAccessTargets#ipv4}

---

###### `ipv6`<sup>Optional</sup> <a name="ipv6" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.putIp.parameter.ipv6"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6">DataCloudflareInfrastructureAccessTargetsTargetsIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.46.0/docs/data-sources/infrastructure_access_targets#ipv6 DataCloudflareInfrastructureAccessTargets#ipv6}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ip">ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ipInput">ip_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ip"></a>

```python
ip: DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference">DataCloudflareInfrastructureAccessTargetsTargetsIpOutputReference</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.ipInput"></a>

```python
ip_input: DataCloudflareInfrastructureAccessTargetsTargetsIp
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsIp">DataCloudflareInfrastructureAccessTargetsTargetsIp</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataCloudflareInfrastructureAccessTargetsTargets
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareInfrastructureAccessTargets.DataCloudflareInfrastructureAccessTargetsTargets">DataCloudflareInfrastructureAccessTargetsTargets</a>

---



