# `dataCloudflareAccountDnsSettingsInternalView` Submodule <a name="`dataCloudflareAccountDnsSettingsInternalView` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAccountDnsSettingsInternalView <a name="DataCloudflareAccountDnsSettingsInternalView" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view cloudflare_account_dns_settings_internal_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView(
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
  filter: DataCloudflareAccountDnsSettingsInternalViewFilter = None,
  view_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#filter DataCloudflareAccountDnsSettingsInternalView#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.viewId">view_id</a></code> | <code>str</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.accountId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#account_id DataCloudflareAccountDnsSettingsInternalView#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#filter DataCloudflareAccountDnsSettingsInternalView#filter}.

---

##### `view_id`<sup>Optional</sup> <a name="view_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.Initializer.parameter.viewId"></a>

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#view_id DataCloudflareAccountDnsSettingsInternalView#view_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetViewId">reset_view_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter"></a>

```python
def put_filter(
  direction: str = None,
  match: str = None,
  name: DataCloudflareAccountDnsSettingsInternalViewFilterName = None,
  order: str = None,
  zone_id: str = None,
  zone_name: str = None
) -> None
```

###### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter.parameter.direction"></a>

- *Type:* str

Direction to order DNS views in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#direction DataCloudflareAccountDnsSettingsInternalView#direction}

---

###### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter.parameter.match"></a>

- *Type:* str

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#match DataCloudflareAccountDnsSettingsInternalView#match}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter.parameter.name"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#name DataCloudflareAccountDnsSettingsInternalView#name}.

---

###### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter.parameter.order"></a>

- *Type:* str

Field to order DNS views by. Available values: "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#order DataCloudflareAccountDnsSettingsInternalView#order}

---

###### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter.parameter.zoneId"></a>

- *Type:* str

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#zone_id DataCloudflareAccountDnsSettingsInternalView#zone_id}

---

###### `zone_name`<sup>Optional</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.putFilter.parameter.zoneName"></a>

- *Type:* str

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#zone_name DataCloudflareAccountDnsSettingsInternalView#zone_name}

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_view_id` <a name="reset_view_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.resetViewId"></a>

```python
def reset_view_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalView resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCloudflareAccountDnsSettingsInternalView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCloudflareAccountDnsSettingsInternalView to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCloudflareAccountDnsSettingsInternalView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAccountDnsSettingsInternalView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference">DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.modifiedTime">modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.viewIdInput">view_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.viewId">view_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.filter"></a>

```python
filter: DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference">DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_time`<sup>Required</sup> <a name="modified_time" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.modifiedTime"></a>

```python
modified_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, DataCloudflareAccountDnsSettingsInternalViewFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a>]

---

##### `view_id_input`<sup>Optional</sup> <a name="view_id_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.viewIdInput"></a>

```python
view_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `view_id`<sup>Required</sup> <a name="view_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.viewId"></a>

```python
view_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalView.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAccountDnsSettingsInternalViewConfig <a name="DataCloudflareAccountDnsSettingsInternalViewConfig" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  filter: DataCloudflareAccountDnsSettingsInternalViewFilter = None,
  view_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.accountId">account_id</a></code> | <code>str</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#filter DataCloudflareAccountDnsSettingsInternalView#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.viewId">view_id</a></code> | <code>str</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#account_id DataCloudflareAccountDnsSettingsInternalView#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.filter"></a>

```python
filter: DataCloudflareAccountDnsSettingsInternalViewFilter
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#filter DataCloudflareAccountDnsSettingsInternalView#filter}.

---

##### `view_id`<sup>Optional</sup> <a name="view_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewConfig.property.viewId"></a>

```python
view_id: str
```

- *Type:* str

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#view_id DataCloudflareAccountDnsSettingsInternalView#view_id}

---

### DataCloudflareAccountDnsSettingsInternalViewFilter <a name="DataCloudflareAccountDnsSettingsInternalViewFilter" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter(
  direction: str = None,
  match: str = None,
  name: DataCloudflareAccountDnsSettingsInternalViewFilterName = None,
  order: str = None,
  zone_id: str = None,
  zone_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.direction">direction</a></code> | <code>str</code> | Direction to order DNS views in. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.match">match</a></code> | <code>str</code> | Whether to match all search requirements or at least one (any). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#name DataCloudflareAccountDnsSettingsInternalView#name}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.order">order</a></code> | <code>str</code> | Field to order DNS views by. Available values: "name", "created_on", "modified_on". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.zoneId">zone_id</a></code> | <code>str</code> | A zone ID that exists in the zones list for the view. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.zoneName">zone_name</a></code> | <code>str</code> | A zone name that exists in the zones list for the view. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction to order DNS views in. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#direction DataCloudflareAccountDnsSettingsInternalView#direction}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.match"></a>

```python
match: str
```

- *Type:* str

Whether to match all search requirements or at least one (any).

If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead.
Available values: "any", "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#match DataCloudflareAccountDnsSettingsInternalView#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.name"></a>

```python
name: DataCloudflareAccountDnsSettingsInternalViewFilterName
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#name DataCloudflareAccountDnsSettingsInternalView#name}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.order"></a>

```python
order: str
```

- *Type:* str

Field to order DNS views by. Available values: "name", "created_on", "modified_on".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#order DataCloudflareAccountDnsSettingsInternalView#order}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

A zone ID that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#zone_id DataCloudflareAccountDnsSettingsInternalView#zone_id}

---

##### `zone_name`<sup>Optional</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

A zone name that exists in the zones list for the view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#zone_name DataCloudflareAccountDnsSettingsInternalView#zone_name}

---

### DataCloudflareAccountDnsSettingsInternalViewFilterName <a name="DataCloudflareAccountDnsSettingsInternalViewFilterName" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.contains">contains</a></code> | <code>str</code> | Substring of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.endswith">endswith</a></code> | <code>str</code> | Suffix of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.exact">exact</a></code> | <code>str</code> | Exact value of the DNS view name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.startswith">startswith</a></code> | <code>str</code> | Prefix of the DNS view name. |

---

##### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.contains"></a>

```python
contains: str
```

- *Type:* str

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#contains DataCloudflareAccountDnsSettingsInternalView#contains}

---

##### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#endswith DataCloudflareAccountDnsSettingsInternalView#endswith}

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.exact"></a>

```python
exact: str
```

- *Type:* str

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#exact DataCloudflareAccountDnsSettingsInternalView#exact}

---

##### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#startswith DataCloudflareAccountDnsSettingsInternalView#startswith}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetContains">reset_contains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetEndswith">reset_endswith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetStartswith">reset_startswith</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_contains` <a name="reset_contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetContains"></a>

```python
def reset_contains() -> None
```

##### `reset_endswith` <a name="reset_endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetEndswith"></a>

```python
def reset_endswith() -> None
```

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_startswith` <a name="reset_startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.resetStartswith"></a>

```python
def reset_startswith() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.containsInput">contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.endswithInput">endswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.startswithInput">startswith_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.contains">contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.endswith">endswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.startswith">startswith</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contains_input`<sup>Optional</sup> <a name="contains_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.containsInput"></a>

```python
contains_input: str
```

- *Type:* str

---

##### `endswith_input`<sup>Optional</sup> <a name="endswith_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.endswithInput"></a>

```python
endswith_input: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `startswith_input`<sup>Optional</sup> <a name="startswith_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.startswithInput"></a>

```python
startswith_input: str
```

- *Type:* str

---

##### `contains`<sup>Required</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.contains"></a>

```python
contains: str
```

- *Type:* str

---

##### `endswith`<sup>Required</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.endswith"></a>

```python
endswith: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `startswith`<sup>Required</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.startswith"></a>

```python
startswith: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareAccountDnsSettingsInternalViewFilterName]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a>]

---


### DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference <a name="DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import data_cloudflare_account_dns_settings_internal_view

dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.putName">put_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetZoneId">reset_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetZoneName">reset_zone_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_name` <a name="put_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.putName"></a>

```python
def put_name(
  contains: str = None,
  endswith: str = None,
  exact: str = None,
  startswith: str = None
) -> None
```

###### `contains`<sup>Optional</sup> <a name="contains" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.putName.parameter.contains"></a>

- *Type:* str

Substring of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#contains DataCloudflareAccountDnsSettingsInternalView#contains}

---

###### `endswith`<sup>Optional</sup> <a name="endswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.putName.parameter.endswith"></a>

- *Type:* str

Suffix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#endswith DataCloudflareAccountDnsSettingsInternalView#endswith}

---

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.putName.parameter.exact"></a>

- *Type:* str

Exact value of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#exact DataCloudflareAccountDnsSettingsInternalView#exact}

---

###### `startswith`<sup>Optional</sup> <a name="startswith" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.putName.parameter.startswith"></a>

- *Type:* str

Prefix of the DNS view name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/data-sources/account_dns_settings_internal_view#startswith DataCloudflareAccountDnsSettingsInternalView#startswith}

---

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

##### `reset_zone_name` <a name="reset_zone_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.resetZoneName"></a>

```python
def reset_zone_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.name">name</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.matchInput">match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.nameInput">name_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneNameInput">zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.match">match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.name"></a>

```python
name: DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference">DataCloudflareAccountDnsSettingsInternalViewFilterNameOutputReference</a>

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.matchInput"></a>

```python
match_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.nameInput"></a>

```python
name_input: typing.Union[IResolvable, DataCloudflareAccountDnsSettingsInternalViewFilterName]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterName">DataCloudflareAccountDnsSettingsInternalViewFilterName</a>]

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `zone_name_input`<sup>Optional</sup> <a name="zone_name_input" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneNameInput"></a>

```python
zone_name_input: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.match"></a>

```python
match: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCloudflareAccountDnsSettingsInternalViewFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.dataCloudflareAccountDnsSettingsInternalView.DataCloudflareAccountDnsSettingsInternalViewFilter">DataCloudflareAccountDnsSettingsInternalViewFilter</a>]

---



