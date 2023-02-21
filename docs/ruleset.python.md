# `ruleset` Submodule <a name="`ruleset` Submodule" id="@cdktf/provider-cloudflare.ruleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ruleset <a name="Ruleset" id="@cdktf/provider-cloudflare.ruleset.Ruleset"></a>

Represents a {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset cloudflare_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.Ruleset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kind: str,
  name: str,
  phase: str,
  account_id: str = None,
  description: str = None,
  id: str = None,
  rules: typing.Union[IResolvable, typing.List[RulesetRules]] = None,
  shareable_entitlement_name: str = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the ruleset. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.phase">phase</a></code> | <code>str</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.description">description</a></code> | <code>str</code> | Brief summary of the ruleset and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.shareableEntitlementName">shareable_entitlement_name</a></code> | <code>str</code> | Name of entitlement that is shareable between entities. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.kind"></a>

- *Type:* str

Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#kind Ruleset#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.name"></a>

- *Type:* str

Name of the ruleset. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.phase"></a>

- *Type:* str

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phase Ruleset#phase}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#account_id Ruleset#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.description"></a>

- *Type:* str

Brief summary of the ruleset and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `shareable_entitlement_name`<sup>Optional</sup> <a name="shareable_entitlement_name" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.shareableEntitlementName"></a>

- *Type:* str

Name of entitlement that is shareable between entities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#shareable_entitlement_name Ruleset#shareable_entitlement_name}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#zone_id Ruleset#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetShareableEntitlementName">reset_shareable_entitlement_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.Ruleset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.ruleset.Ruleset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.Ruleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[RulesetRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.Ruleset.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_shareable_entitlement_name` <a name="reset_shareable_entitlement_name" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetShareableEntitlementName"></a>

```python
def reset_shareable_entitlement_name() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.Ruleset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.Ruleset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.Ruleset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.ruleset.Ruleset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList">RulesetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.phaseInput">phase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementNameInput">shareable_entitlement_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.phase">phase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementName">shareable_entitlement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.rules"></a>

```python
rules: RulesetRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList">RulesetRulesList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phase_input`<sup>Optional</sup> <a name="phase_input" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.phaseInput"></a>

```python
phase_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[RulesetRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>]]

---

##### `shareable_entitlement_name_input`<sup>Optional</sup> <a name="shareable_entitlement_name_input" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementNameInput"></a>

```python
shareable_entitlement_name_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.phase"></a>

```python
phase: str
```

- *Type:* str

---

##### `shareable_entitlement_name`<sup>Required</sup> <a name="shareable_entitlement_name" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.shareableEntitlementName"></a>

```python
shareable_entitlement_name: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.Ruleset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.ruleset.Ruleset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RulesetConfig <a name="RulesetConfig" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kind: str,
  name: str,
  phase: str,
  account_id: str = None,
  description: str = None,
  id: str = None,
  rules: typing.Union[IResolvable, typing.List[RulesetRules]] = None,
  shareable_entitlement_name: str = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.kind">kind</a></code> | <code>str</code> | Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.name">name</a></code> | <code>str</code> | Name of the ruleset. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.phase">phase</a></code> | <code>str</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.description">description</a></code> | <code>str</code> | Brief summary of the ruleset and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.shareableEntitlementName">shareable_entitlement_name</a></code> | <code>str</code> | Name of entitlement that is shareable between entities. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Type of Ruleset to create. Available values: `custom`, `managed`, `root`, `schema`, `zone`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#kind Ruleset#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the ruleset. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `phase`<sup>Required</sup> <a name="phase" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.phase"></a>

```python
phase: str
```

- *Type:* str

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phase Ruleset#phase}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#account_id Ruleset#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Brief summary of the ruleset and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[RulesetRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `shareable_entitlement_name`<sup>Optional</sup> <a name="shareable_entitlement_name" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.shareableEntitlementName"></a>

```python
shareable_entitlement_name: str
```

- *Type:* str

Name of entitlement that is shareable between entities.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#shareable_entitlement_name Ruleset#shareable_entitlement_name}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.ruleset.RulesetConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#zone_id Ruleset#zone_id}

---

### RulesetRules <a name="RulesetRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRules(
  expression: str,
  action: str = None,
  action_parameters: RulesetRulesActionParameters = None,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  exposed_credential_check: RulesetRulesExposedCredentialCheck = None,
  last_updated: str = None,
  logging: RulesetRulesLogging = None,
  ratelimit: RulesetRulesRatelimit = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.expression">expression</a></code> | <code>str</code> | Criteria for an HTTP request to trigger the ruleset rule action. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.action">action</a></code> | <code>str</code> | Action to perform in the ruleset rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.actionParameters">action_parameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | action_parameters block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.description">description</a></code> | <code>str</code> | Brief summary of the ruleset rule and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the rule is active. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.exposedCredentialCheck">exposed_credential_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | exposed_credential_check block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.lastUpdated">last_updated</a></code> | <code>str</code> | The most recent update to this rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules.property.ratelimit">ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | ratelimit block. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.expression"></a>

```python
expression: str
```

- *Type:* str

Criteria for an HTTP request to trigger the ruleset rule action.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.action"></a>

```python
action: str
```

- *Type:* str

Action to perform in the ruleset rule.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `action_parameters`<sup>Optional</sup> <a name="action_parameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.actionParameters"></a>

```python
action_parameters: RulesetRulesActionParameters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

action_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action_parameters Ruleset#action_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.description"></a>

```python
description: str
```

- *Type:* str

Brief summary of the ruleset rule and its intended use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#description Ruleset#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the rule is active.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `exposed_credential_check`<sup>Optional</sup> <a name="exposed_credential_check" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.exposedCredentialCheck"></a>

```python
exposed_credential_check: RulesetRulesExposedCredentialCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

exposed_credential_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exposed_credential_check Ruleset#exposed_credential_check}

---

##### `last_updated`<sup>Optional</sup> <a name="last_updated" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

The most recent update to this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#last_updated Ruleset#last_updated}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.logging"></a>

```python
logging: RulesetRulesLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

logging block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#logging Ruleset#logging}

---

##### `ratelimit`<sup>Optional</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRules.property.ratelimit"></a>

```python
ratelimit: RulesetRulesRatelimit
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

ratelimit block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ratelimit Ruleset#ratelimit}

---

### RulesetRulesActionParameters <a name="RulesetRulesActionParameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParameters(
  automatic_https_rewrites: typing.Union[bool, IResolvable] = None,
  autominify: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersAutominify]] = None,
  bic: typing.Union[bool, IResolvable] = None,
  browser_ttl: RulesetRulesActionParametersBrowserTtl = None,
  cache: typing.Union[bool, IResolvable] = None,
  cache_key: RulesetRulesActionParametersCacheKey = None,
  content: str = None,
  content_type: str = None,
  cookie_fields: typing.List[str] = None,
  disable_apps: typing.Union[bool, IResolvable] = None,
  disable_railgun: typing.Union[bool, IResolvable] = None,
  disable_zaraz: typing.Union[bool, IResolvable] = None,
  edge_ttl: RulesetRulesActionParametersEdgeTtl = None,
  email_obfuscation: typing.Union[bool, IResolvable] = None,
  from_list: RulesetRulesActionParametersFromList = None,
  from_value: RulesetRulesActionParametersFromValue = None,
  headers: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersHeaders]] = None,
  host_header: str = None,
  hotlink_protection: typing.Union[bool, IResolvable] = None,
  id: str = None,
  increment: typing.Union[int, float] = None,
  matched_data: RulesetRulesActionParametersMatchedData = None,
  mirage: typing.Union[bool, IResolvable] = None,
  opportunistic_encryption: typing.Union[bool, IResolvable] = None,
  origin: RulesetRulesActionParametersOrigin = None,
  origin_error_page_passthru: typing.Union[bool, IResolvable] = None,
  overrides: RulesetRulesActionParametersOverrides = None,
  phases: typing.List[str] = None,
  polish: str = None,
  products: typing.List[str] = None,
  request_fields: typing.List[str] = None,
  respect_strong_etags: typing.Union[bool, IResolvable] = None,
  response: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersResponse]] = None,
  response_fields: typing.List[str] = None,
  rocket_loader: typing.Union[bool, IResolvable] = None,
  rules: typing.Mapping[str] = None,
  ruleset: str = None,
  rulesets: typing.List[str] = None,
  security_level: str = None,
  server_side_excludes: typing.Union[bool, IResolvable] = None,
  serve_stale: RulesetRulesActionParametersServeStale = None,
  sni: RulesetRulesActionParametersSni = None,
  ssl: str = None,
  status_code: typing.Union[int, float] = None,
  sxg: typing.Union[bool, IResolvable] = None,
  uri: RulesetRulesActionParametersUri = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.automaticHttpsRewrites">automatic_https_rewrites</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn on or off Cloudflare Automatic HTTPS rewrites. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.autominify">autominify</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>]]</code> | autominify block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.bic">bic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Inspect the visitor's browser for headers commonly associated with spammers and certain bots. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.browserTtl">browser_ttl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | browser_ttl block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cache">cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to cache if expression matches. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cacheKey">cache_key</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | cache_key block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.content">content</a></code> | <code>str</code> | Content of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.contentType">content_type</a></code> | <code>str</code> | Content-Type of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cookieFields">cookie_fields</a></code> | <code>typing.List[str]</code> | List of cookie values to include as part of custom fields logging. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableApps">disable_apps</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn off all active Cloudflare Apps. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableRailgun">disable_railgun</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn off railgun feature of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableZaraz">disable_zaraz</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn off zaraz feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.edgeTtl">edge_ttl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | edge_ttl block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.emailObfuscation">email_obfuscation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromList">from_list</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | from_list block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromValue">from_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | from_value block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>]]</code> | headers block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hostHeader">host_header</a></code> | <code>str</code> | Host Header that request origin receives. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hotlinkProtection">hotlink_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn on or off the hotlink protection feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.id">id</a></code> | <code>str</code> | Identifier of the action parameter to modify. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.increment">increment</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.matchedData">matched_data</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | matched_data block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.mirage">mirage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn on or off Cloudflare Mirage of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.opportunisticEncryption">opportunistic_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | origin block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.originErrorPagePassthru">origin_error_page_passthru</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Pass-through error page for origin. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | overrides block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.phases">phases</a></code> | <code>typing.List[str]</code> | Point in the request/response lifecycle where the ruleset will be created. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.polish">polish</a></code> | <code>str</code> | Apply options from the Polish feature of the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.products">products</a></code> | <code>typing.List[str]</code> | Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.requestFields">request_fields</a></code> | <code>typing.List[str]</code> | List of request headers to include as part of custom fields logging, in lowercase. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.respectStrongEtags">respect_strong_etags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Respect strong ETags. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.response">response</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>]]</code> | response block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.responseFields">response_fields</a></code> | <code>typing.List[str]</code> | List of response headers to include as part of custom fields logging, in lowercase. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rocketLoader">rocket_loader</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rules">rules</a></code> | <code>typing.Mapping[str]</code> | Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ruleset">ruleset</a></code> | <code>str</code> | Which ruleset ID to target. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rulesets">rulesets</a></code> | <code>typing.List[str]</code> | List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.securityLevel">security_level</a></code> | <code>str</code> | Control options for the Security Level feature from the Security app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serverSideExcludes">server_side_excludes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serveStale">serve_stale</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | serve_stale block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sni">sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | sni block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ssl">ssl</a></code> | <code>str</code> | Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | HTTP status code of the custom error response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sxg">sxg</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Turn on or off the SXG feature. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.uri">uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | uri block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.version">version</a></code> | <code>str</code> | Version of the ruleset to deploy. |

---

##### `automatic_https_rewrites`<sup>Optional</sup> <a name="automatic_https_rewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.automaticHttpsRewrites"></a>

```python
automatic_https_rewrites: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off Cloudflare Automatic HTTPS rewrites.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#automatic_https_rewrites Ruleset#automatic_https_rewrites}

---

##### `autominify`<sup>Optional</sup> <a name="autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.autominify"></a>

```python
autominify: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersAutominify]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>]]

autominify block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#autominify Ruleset#autominify}

---

##### `bic`<sup>Optional</sup> <a name="bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.bic"></a>

```python
bic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Inspect the visitor's browser for headers commonly associated with spammers and certain bots.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#bic Ruleset#bic}

---

##### `browser_ttl`<sup>Optional</sup> <a name="browser_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.browserTtl"></a>

```python
browser_ttl: RulesetRulesActionParametersBrowserTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

browser_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#browser_ttl Ruleset#browser_ttl}

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cache"></a>

```python
cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to cache if expression matches.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache Ruleset#cache}

---

##### `cache_key`<sup>Optional</sup> <a name="cache_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cacheKey"></a>

```python
cache_key: RulesetRulesActionParametersCacheKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

cache_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_key Ruleset#cache_key}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.content"></a>

```python
content: str
```

- *Type:* str

Content of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Content-Type of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}

---

##### `cookie_fields`<sup>Optional</sup> <a name="cookie_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.cookieFields"></a>

```python
cookie_fields: typing.List[str]
```

- *Type:* typing.List[str]

List of cookie values to include as part of custom fields logging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie_fields Ruleset#cookie_fields}

---

##### `disable_apps`<sup>Optional</sup> <a name="disable_apps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableApps"></a>

```python
disable_apps: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn off all active Cloudflare Apps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_apps Ruleset#disable_apps}

---

##### `disable_railgun`<sup>Optional</sup> <a name="disable_railgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableRailgun"></a>

```python
disable_railgun: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn off railgun feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_railgun Ruleset#disable_railgun}

---

##### `disable_zaraz`<sup>Optional</sup> <a name="disable_zaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.disableZaraz"></a>

```python
disable_zaraz: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn off zaraz feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_zaraz Ruleset#disable_zaraz}

---

##### `edge_ttl`<sup>Optional</sup> <a name="edge_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.edgeTtl"></a>

```python
edge_ttl: RulesetRulesActionParametersEdgeTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

edge_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#edge_ttl Ruleset#edge_ttl}

---

##### `email_obfuscation`<sup>Optional</sup> <a name="email_obfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.emailObfuscation"></a>

```python
email_obfuscation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#email_obfuscation Ruleset#email_obfuscation}

---

##### `from_list`<sup>Optional</sup> <a name="from_list" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromList"></a>

```python
from_list: RulesetRulesActionParametersFromList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

from_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_list Ruleset#from_list}

---

##### `from_value`<sup>Optional</sup> <a name="from_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.fromValue"></a>

```python
from_value: RulesetRulesActionParametersFromValue
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

from_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_value Ruleset#from_value}

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#headers Ruleset#headers}

---

##### `host_header`<sup>Optional</sup> <a name="host_header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hostHeader"></a>

```python
host_header: str
```

- *Type:* str

Host Header that request origin receives.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host_header Ruleset#host_header}

---

##### `hotlink_protection`<sup>Optional</sup> <a name="hotlink_protection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.hotlinkProtection"></a>

```python
hotlink_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the hotlink protection feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#hotlink_protection Ruleset#hotlink_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.id"></a>

```python
id: str
```

- *Type:* str

Identifier of the action parameter to modify.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `increment`<sup>Optional</sup> <a name="increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.increment"></a>

```python
increment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}.

---

##### `matched_data`<sup>Optional</sup> <a name="matched_data" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.matchedData"></a>

```python
matched_data: RulesetRulesActionParametersMatchedData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

matched_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#matched_data Ruleset#matched_data}

---

##### `mirage`<sup>Optional</sup> <a name="mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.mirage"></a>

```python
mirage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off Cloudflare Mirage of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mirage Ruleset#mirage}

---

##### `opportunistic_encryption`<sup>Optional</sup> <a name="opportunistic_encryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.opportunisticEncryption"></a>

```python
opportunistic_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#opportunistic_encryption Ruleset#opportunistic_encryption}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.origin"></a>

```python
origin: RulesetRulesActionParametersOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}

---

##### `origin_error_page_passthru`<sup>Optional</sup> <a name="origin_error_page_passthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.originErrorPagePassthru"></a>

```python
origin_error_page_passthru: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Pass-through error page for origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin_error_page_passthru Ruleset#origin_error_page_passthru}

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.overrides"></a>

```python
overrides: RulesetRulesActionParametersOverrides
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#overrides Ruleset#overrides}

---

##### `phases`<sup>Optional</sup> <a name="phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.phases"></a>

```python
phases: typing.List[str]
```

- *Type:* typing.List[str]

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phases Ruleset#phases}

---

##### `polish`<sup>Optional</sup> <a name="polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.polish"></a>

```python
polish: str
```

- *Type:* str

Apply options from the Polish feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#polish Ruleset#polish}

---

##### `products`<sup>Optional</sup> <a name="products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.products"></a>

```python
products: typing.List[str]
```

- *Type:* typing.List[str]

Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#products Ruleset#products}

---

##### `request_fields`<sup>Optional</sup> <a name="request_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.requestFields"></a>

```python
request_fields: typing.List[str]
```

- *Type:* typing.List[str]

List of request headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#request_fields Ruleset#request_fields}

---

##### `respect_strong_etags`<sup>Optional</sup> <a name="respect_strong_etags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.respectStrongEtags"></a>

```python
respect_strong_etags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Respect strong ETags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#respect_strong_etags Ruleset#respect_strong_etags}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.response"></a>

```python
response: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersResponse]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>]]

response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response Ruleset#response}

---

##### `response_fields`<sup>Optional</sup> <a name="response_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.responseFields"></a>

```python
response_fields: typing.List[str]
```

- *Type:* typing.List[str]

List of response headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response_fields Ruleset#response_fields}

---

##### `rocket_loader`<sup>Optional</sup> <a name="rocket_loader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rocketLoader"></a>

```python
rocket_loader: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rocket_loader Ruleset#rocket_loader}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rules"></a>

```python
rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs.

Example: `rules = { "efb7b8c949ac4650a09736fc376e9aee" = "5de7edfa648c4d6891dc3e7f84534ffa,e3a567afc347477d9702d9047e97d760" }`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `ruleset`<sup>Optional</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ruleset"></a>

```python
ruleset: str
```

- *Type:* str

Which ruleset ID to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ruleset Ruleset#ruleset}

---

##### `rulesets`<sup>Optional</sup> <a name="rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.rulesets"></a>

```python
rulesets: typing.List[str]
```

- *Type:* typing.List[str]

List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rulesets Ruleset#rulesets}

---

##### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

Control options for the Security Level feature from the Security app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#security_level Ruleset#security_level}

---

##### `server_side_excludes`<sup>Optional</sup> <a name="server_side_excludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serverSideExcludes"></a>

```python
server_side_excludes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#server_side_excludes Ruleset#server_side_excludes}

---

##### `serve_stale`<sup>Optional</sup> <a name="serve_stale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.serveStale"></a>

```python
serve_stale: RulesetRulesActionParametersServeStale
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

serve_stale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#serve_stale Ruleset#serve_stale}

---

##### `sni`<sup>Optional</sup> <a name="sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sni"></a>

```python
sni: RulesetRulesActionParametersSni
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

sni block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sni Ruleset#sni}

---

##### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.ssl"></a>

```python
ssl: str
```

- *Type:* str

Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ssl Ruleset#ssl}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

HTTP status code of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `sxg`<sup>Optional</sup> <a name="sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.sxg"></a>

```python
sxg: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the SXG feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sxg Ruleset#sxg}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.uri"></a>

```python
uri: RulesetRulesActionParametersUri
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

uri block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#uri Ruleset#uri}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the ruleset to deploy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#version Ruleset#version}

---

### RulesetRulesActionParametersAutominify <a name="RulesetRulesActionParametersAutominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersAutominify(
  css: typing.Union[bool, IResolvable] = None,
  html: typing.Union[bool, IResolvable] = None,
  js: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.css">css</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | SSL minification. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.html">html</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | HTML minification. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.js">js</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | JS minification. |

---

##### `css`<sup>Optional</sup> <a name="css" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.css"></a>

```python
css: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

SSL minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#css Ruleset#css}

---

##### `html`<sup>Optional</sup> <a name="html" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.html"></a>

```python
html: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

HTML minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#html Ruleset#html}

---

##### `js`<sup>Optional</sup> <a name="js" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify.property.js"></a>

```python
js: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

JS minification.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#js Ruleset#js}

---

### RulesetRulesActionParametersBrowserTtl <a name="RulesetRulesActionParametersBrowserTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersBrowserTtl(
  mode: str,
  default: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.mode">mode</a></code> | <code>str</code> | Mode of the browser TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.default">default</a></code> | <code>typing.Union[int, float]</code> | Default browser TTL. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.mode"></a>

```python
mode: str
```

- *Type:* str

Mode of the browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl.property.default"></a>

```python
default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

### RulesetRulesActionParametersCacheKey <a name="RulesetRulesActionParametersCacheKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKey(
  cache_by_device_type: typing.Union[bool, IResolvable] = None,
  cache_deception_armor: typing.Union[bool, IResolvable] = None,
  custom_key: RulesetRulesActionParametersCacheKeyCustomKey = None,
  ignore_query_strings_order: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheByDeviceType">cache_by_device_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Cache by device type. Conflicts with "custom_key.user.device_type". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheDeceptionArmor">cache_deception_armor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Cache deception armor. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.customKey">custom_key</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | custom_key block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.ignoreQueryStringsOrder">ignore_query_strings_order</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignore query strings order. |

---

##### `cache_by_device_type`<sup>Optional</sup> <a name="cache_by_device_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheByDeviceType"></a>

```python
cache_by_device_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Cache by device type. Conflicts with "custom_key.user.device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_by_device_type Ruleset#cache_by_device_type}

---

##### `cache_deception_armor`<sup>Optional</sup> <a name="cache_deception_armor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.cacheDeceptionArmor"></a>

```python
cache_deception_armor: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Cache deception armor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_deception_armor Ruleset#cache_deception_armor}

---

##### `custom_key`<sup>Optional</sup> <a name="custom_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.customKey"></a>

```python
custom_key: RulesetRulesActionParametersCacheKeyCustomKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

custom_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#custom_key Ruleset#custom_key}

---

##### `ignore_query_strings_order`<sup>Optional</sup> <a name="ignore_query_strings_order" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey.property.ignoreQueryStringsOrder"></a>

```python
ignore_query_strings_order: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore query strings order.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ignore_query_strings_order Ruleset#ignore_query_strings_order}

---

### RulesetRulesActionParametersCacheKeyCustomKey <a name="RulesetRulesActionParametersCacheKeyCustomKey" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKey(
  cookie: RulesetRulesActionParametersCacheKeyCustomKeyCookie = None,
  header: RulesetRulesActionParametersCacheKeyCustomKeyHeader = None,
  host: RulesetRulesActionParametersCacheKeyCustomKeyHost = None,
  query_string: RulesetRulesActionParametersCacheKeyCustomKeyQueryString = None,
  user: RulesetRulesActionParametersCacheKeyCustomKeyUser = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | cookie block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | header block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.queryString">query_string</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | query_string block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | user block. |

---

##### `cookie`<sup>Optional</sup> <a name="cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.cookie"></a>

```python
cookie: RulesetRulesActionParametersCacheKeyCustomKeyCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

cookie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie Ruleset#cookie}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.header"></a>

```python
header: RulesetRulesActionParametersCacheKeyCustomKeyHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#header Ruleset#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.host"></a>

```python
host: RulesetRulesActionParametersCacheKeyCustomKeyHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

host block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.queryString"></a>

```python
query_string: RulesetRulesActionParametersCacheKeyCustomKeyQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query_string Ruleset#query_string}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey.property.user"></a>

```python
user: RulesetRulesActionParametersCacheKeyCustomKeyUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#user Ruleset#user}

---

### RulesetRulesActionParametersCacheKeyCustomKeyCookie <a name="RulesetRulesActionParametersCacheKeyCustomKeyCookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie(
  check_presence: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.checkPresence">check_presence</a></code> | <code>typing.List[str]</code> | List of cookies to check for presence in the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.include">include</a></code> | <code>typing.List[str]</code> | List of cookies to include in the custom key. |

---

##### `check_presence`<sup>Optional</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.checkPresence"></a>

```python
check_presence: typing.List[str]
```

- *Type:* typing.List[str]

List of cookies to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

List of cookies to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyHeader <a name="RulesetRulesActionParametersCacheKeyCustomKeyHeader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader(
  check_presence: typing.List[str] = None,
  exclude_origin: typing.Union[bool, IResolvable] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.checkPresence">check_presence</a></code> | <code>typing.List[str]</code> | List of headers to check for presence in the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.excludeOrigin">exclude_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Exclude the origin header from the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.include">include</a></code> | <code>typing.List[str]</code> | List of headers to include in the custom key. |

---

##### `check_presence`<sup>Optional</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.checkPresence"></a>

```python
check_presence: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

##### `exclude_origin`<sup>Optional</sup> <a name="exclude_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.excludeOrigin"></a>

```python
exclude_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Exclude the origin header from the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude_origin Ruleset#exclude_origin}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

List of headers to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyHost <a name="RulesetRulesActionParametersCacheKeyCustomKeyHost" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost(
  resolved: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.property.resolved">resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Resolve hostname to IP address. |

---

##### `resolved`<sup>Optional</sup> <a name="resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost.property.resolved"></a>

```python
resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Resolve hostname to IP address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#resolved Ruleset#resolved}

---

### RulesetRulesActionParametersCacheKeyCustomKeyQueryString <a name="RulesetRulesActionParametersCacheKeyCustomKeyQueryString" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | List of query string parameters to exclude from the custom key. Conflicts with "include". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.include">include</a></code> | <code>typing.List[str]</code> | List of query string parameters to include in the custom key. Conflicts with "exclude". |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

List of query string parameters to exclude from the custom key. Conflicts with "include".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude Ruleset#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

List of query string parameters to include in the custom key. Conflicts with "exclude".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

### RulesetRulesActionParametersCacheKeyCustomKeyUser <a name="RulesetRulesActionParametersCacheKeyCustomKeyUser" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser(
  device_type: typing.Union[bool, IResolvable] = None,
  geo: typing.Union[bool, IResolvable] = None,
  lang: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.deviceType">device_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.geo">geo</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Add geo data to the custom key. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.lang">lang</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Add language data to the custom key. |

---

##### `device_type`<sup>Optional</sup> <a name="device_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.deviceType"></a>

```python
device_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#device_type Ruleset#device_type}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.geo"></a>

```python
geo: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Add geo data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#geo Ruleset#geo}

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser.property.lang"></a>

```python
lang: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Add language data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#lang Ruleset#lang}

---

### RulesetRulesActionParametersEdgeTtl <a name="RulesetRulesActionParametersEdgeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersEdgeTtl(
  mode: str,
  default: typing.Union[int, float] = None,
  status_code_ttl: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtl]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.mode">mode</a></code> | <code>str</code> | Mode of the edge TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.default">default</a></code> | <code>typing.Union[int, float]</code> | Default edge TTL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.statusCodeTtl">status_code_ttl</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>]]</code> | status_code_ttl block. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.mode"></a>

```python
mode: str
```

- *Type:* str

Mode of the edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.default"></a>

```python
default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

##### `status_code_ttl`<sup>Optional</sup> <a name="status_code_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl.property.statusCodeTtl"></a>

```python
status_code_ttl: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>]]

status_code_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_ttl Ruleset#status_code_ttl}

---

### RulesetRulesActionParametersEdgeTtlStatusCodeTtl <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl(
  value: typing.Union[int, float],
  status_code: typing.Union[int, float] = None,
  status_code_range: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Status code edge TTL value. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | Status code for which the edge TTL is applied. Conflicts with "status_code_range". |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCodeRange">status_code_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>]]</code> | status_code_range block. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Status code edge TTL value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Status code for which the edge TTL is applied. Conflicts with "status_code_range".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `status_code_range`<sup>Optional</sup> <a name="status_code_range" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl.property.statusCodeRange"></a>

```python
status_code_range: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>]]

status_code_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_range Ruleset#status_code_range}

---

### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange(
  from: typing.Union[int, float] = None,
  to: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.from">from</a></code> | <code>typing.Union[int, float]</code> | From status code. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.to">to</a></code> | <code>typing.Union[int, float]</code> | To status code. |

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

From status code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from Ruleset#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

To status code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#to Ruleset#to}

---

### RulesetRulesActionParametersFromList <a name="RulesetRulesActionParametersFromList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersFromList(
  key: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.key">key</a></code> | <code>str</code> | Expression to use for the list lookup. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.name">name</a></code> | <code>str</code> | Name of the list. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.key"></a>

```python
key: str
```

- *Type:* str

Expression to use for the list lookup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#key Ruleset#key}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

### RulesetRulesActionParametersFromValue <a name="RulesetRulesActionParametersFromValue" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersFromValue(
  preserve_query_string: typing.Union[bool, IResolvable] = None,
  status_code: typing.Union[int, float] = None,
  target_url: RulesetRulesActionParametersFromValueTargetUrl = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.preserveQueryString">preserve_query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Preserve query string for redirect URL. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | Status code for redirect. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.targetUrl">target_url</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | target_url block. |

---

##### `preserve_query_string`<sup>Optional</sup> <a name="preserve_query_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.preserveQueryString"></a>

```python
preserve_query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Preserve query string for redirect URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#preserve_query_string Ruleset#preserve_query_string}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Status code for redirect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

##### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue.property.targetUrl"></a>

```python
target_url: RulesetRulesActionParametersFromValueTargetUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

target_url block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#target_url Ruleset#target_url}

---

### RulesetRulesActionParametersFromValueTargetUrl <a name="RulesetRulesActionParametersFromValueTargetUrl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersFromValueTargetUrl(
  expression: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.expression">expression</a></code> | <code>str</code> | Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.value">value</a></code> | <code>str</code> | Static value to provide as the HTTP request header value. Conflicts with `"expression"`. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.expression"></a>

```python
expression: str
```

- *Type:* str

Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl.property.value"></a>

```python
value: str
```

- *Type:* str

Static value to provide as the HTTP request header value. Conflicts with `"expression"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersHeaders <a name="RulesetRulesActionParametersHeaders" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersHeaders(
  expression: str = None,
  name: str = None,
  operation: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.expression">expression</a></code> | <code>str</code> | Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.name">name</a></code> | <code>str</code> | Name of the HTTP request header to target. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.operation">operation</a></code> | <code>str</code> | Action to perform on the HTTP request header. Available values: `remove`, `set`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.value">value</a></code> | <code>str</code> | Static value to provide as the HTTP request header value. Conflicts with `"expression"`. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.expression"></a>

```python
expression: str
```

- *Type:* str

Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the HTTP request header to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.operation"></a>

```python
operation: str
```

- *Type:* str

Action to perform on the HTTP request header. Available values: `remove`, `set`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#operation Ruleset#operation}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders.property.value"></a>

```python
value: str
```

- *Type:* str

Static value to provide as the HTTP request header value. Conflicts with `"expression"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersMatchedData <a name="RulesetRulesActionParametersMatchedData" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersMatchedData(
  public_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.property.publicKey">public_key</a></code> | <code>str</code> | Public key to use within WAF Ruleset payload logging to view the HTTP request parameters. |

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Public key to use within WAF Ruleset payload logging to view the HTTP request parameters.

You can generate a public key [using the `matched-data-cli` command-line tool](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/command-line/generate-key-pair) or [in the Cloudflare dashboard](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/configure).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#public_key Ruleset#public_key}

---

### RulesetRulesActionParametersOrigin <a name="RulesetRulesActionParametersOrigin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOrigin(
  host: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.host">host</a></code> | <code>str</code> | Origin Hostname where request is sent. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Origin Port where request is sent. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.host"></a>

```python
host: str
```

- *Type:* str

Origin Hostname where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Origin Port where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#port Ruleset#port}

---

### RulesetRulesActionParametersOverrides <a name="RulesetRulesActionParametersOverrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOverrides(
  action: str = None,
  categories: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesCategories]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesRules]] = None,
  sensitivity_level: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.action">action</a></code> | <code>str</code> | Action to perform in the rule-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.categories">categories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>]]</code> | categories block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines if the current ruleset-level override enables or disables the ruleset. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.sensitivityLevel">sensitivity_level</a></code> | <code>str</code> | Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.status">status</a></code> | <code>str</code> | Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.action"></a>

```python
action: str
```

- *Type:* str

Action to perform in the rule-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.categories"></a>

```python
categories: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesCategories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>]]

categories block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#categories Ruleset#categories}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines if the current ruleset-level override enables or disables the ruleset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

##### `sensitivity_level`<sup>Optional</sup> <a name="sensitivity_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.sensitivityLevel"></a>

```python
sensitivity_level: str
```

- *Type:* str

Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides.property.status"></a>

```python
status: str
```

- *Type:* str

Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersOverridesCategories <a name="RulesetRulesActionParametersOverridesCategories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOverridesCategories(
  action: str = None,
  category: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.action">action</a></code> | <code>str</code> | Action to perform in the tag-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.category">category</a></code> | <code>str</code> | Tag name to apply the ruleset rule override to. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines if the current tag-level override enables or disables the ruleset rules with the specified tag. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.status">status</a></code> | <code>str</code> | Defines if the current tag-level override enables or disables the ruleset rules with the specified tag. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.action"></a>

```python
action: str
```

- *Type:* str

Action to perform in the tag-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.category"></a>

```python
category: str
```

- *Type:* str

Tag name to apply the ruleset rule override to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#category Ruleset#category}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories.property.status"></a>

```python
status: str
```

- *Type:* str

Defines if the current tag-level override enables or disables the ruleset rules with the specified tag.

Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersOverridesRules <a name="RulesetRulesActionParametersOverridesRules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOverridesRules(
  action: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  score_threshold: typing.Union[int, float] = None,
  sensitivity_level: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.action">action</a></code> | <code>str</code> | Action to perform in the rule-level override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Defines if the current rule-level override enables or disables the rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.id">id</a></code> | <code>str</code> | Rule ID to apply the override to. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.scoreThreshold">score_threshold</a></code> | <code>typing.Union[int, float]</code> | Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.sensitivityLevel">sensitivity_level</a></code> | <code>str</code> | Sensitivity level for a ruleset rule override. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.status">status</a></code> | <code>str</code> | Defines if the current rule-level override enables or disables the rule. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.action"></a>

```python
action: str
```

- *Type:* str

Action to perform in the rule-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines if the current rule-level override enables or disables the rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.id"></a>

```python
id: str
```

- *Type:* str

Rule ID to apply the override to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `score_threshold`<sup>Optional</sup> <a name="score_threshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.scoreThreshold"></a>

```python
score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Anomaly score threshold to apply in the ruleset rule override. Only applicable to modsecurity-based rulesets.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_threshold Ruleset#score_threshold}

---

##### `sensitivity_level`<sup>Optional</sup> <a name="sensitivity_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.sensitivityLevel"></a>

```python
sensitivity_level: str
```

- *Type:* str

Sensitivity level for a ruleset rule override.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules.property.status"></a>

```python
status: str
```

- *Type:* str

Defines if the current rule-level override enables or disables the rule. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesActionParametersResponse <a name="RulesetRulesActionParametersResponse" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersResponse(
  content: str = None,
  content_type: str = None,
  status_code: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.content">content</a></code> | <code>str</code> | Body content to include in the response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.contentType">content_type</a></code> | <code>str</code> | HTTP content type to send in the response. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | HTTP status code to send in the response. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.content"></a>

```python
content: str
```

- *Type:* str

Body content to include in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

HTTP content type to send in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

HTTP status code to send in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

### RulesetRulesActionParametersServeStale <a name="RulesetRulesActionParametersServeStale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersServeStale(
  disable_stale_while_updating: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.property.disableStaleWhileUpdating">disable_stale_while_updating</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable stale while updating. |

---

##### `disable_stale_while_updating`<sup>Optional</sup> <a name="disable_stale_while_updating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale.property.disableStaleWhileUpdating"></a>

```python
disable_stale_while_updating: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable stale while updating.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_stale_while_updating Ruleset#disable_stale_while_updating}

---

### RulesetRulesActionParametersSni <a name="RulesetRulesActionParametersSni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersSni(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.property.value">value</a></code> | <code>str</code> | Value to define for SNI. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni.property.value"></a>

```python
value: str
```

- *Type:* str

Value to define for SNI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersUri <a name="RulesetRulesActionParametersUri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersUri(
  origin: typing.Union[bool, IResolvable] = None,
  path: RulesetRulesActionParametersUriPath = None,
  query: RulesetRulesActionParametersUriQuery = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.origin">origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.path">path</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | path block. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.query">query</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | query block. |

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.origin"></a>

```python
origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.path"></a>

```python
path: RulesetRulesActionParametersUriPath
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#path Ruleset#path}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri.property.query"></a>

```python
query: RulesetRulesActionParametersUriQuery
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query Ruleset#query}

---

### RulesetRulesActionParametersUriPath <a name="RulesetRulesActionParametersUriPath" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersUriPath(
  expression: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.expression">expression</a></code> | <code>str</code> | Expression that defines the updated (dynamic) value of the URI path or query string component. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.value">value</a></code> | <code>str</code> | Static string value of the updated URI path or query string component. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.expression"></a>

```python
expression: str
```

- *Type:* str

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath.property.value"></a>

```python
value: str
```

- *Type:* str

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesActionParametersUriQuery <a name="RulesetRulesActionParametersUriQuery" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersUriQuery(
  expression: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.expression">expression</a></code> | <code>str</code> | Expression that defines the updated (dynamic) value of the URI path or query string component. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.value">value</a></code> | <code>str</code> | Static string value of the updated URI path or query string component. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.expression"></a>

```python
expression: str
```

- *Type:* str

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery.property.value"></a>

```python
value: str
```

- *Type:* str

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

### RulesetRulesExposedCredentialCheck <a name="RulesetRulesExposedCredentialCheck" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesExposedCredentialCheck(
  password_expression: str = None,
  username_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.passwordExpression">password_expression</a></code> | <code>str</code> | Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.usernameExpression">username_expression</a></code> | <code>str</code> | Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value. |

---

##### `password_expression`<sup>Optional</sup> <a name="password_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.passwordExpression"></a>

```python
password_expression: str
```

- *Type:* str

Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#password_expression Ruleset#password_expression}

---

##### `username_expression`<sup>Optional</sup> <a name="username_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck.property.usernameExpression"></a>

```python
username_expression: str
```

- *Type:* str

Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#username_expression Ruleset#username_expression}

---

### RulesetRulesLogging <a name="RulesetRulesLogging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesLogging(
  enabled: typing.Union[bool, IResolvable] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Override the default logging behavior when a rule is matched. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.status">status</a></code> | <code>str</code> | Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Override the default logging behavior when a rule is matched.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging.property.status"></a>

```python
status: str
```

- *Type:* str

Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

### RulesetRulesRatelimit <a name="RulesetRulesRatelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesRatelimit(
  characteristics: typing.List[str] = None,
  counting_expression: str = None,
  mitigation_timeout: typing.Union[int, float] = None,
  period: typing.Union[int, float] = None,
  requests_per_period: typing.Union[int, float] = None,
  requests_to_origin: typing.Union[bool, IResolvable] = None,
  score_per_period: typing.Union[int, float] = None,
  score_response_header_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.characteristics">characteristics</a></code> | <code>typing.List[str]</code> | List of parameters that define how Cloudflare tracks the request rate for this rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.countingExpression">counting_expression</a></code> | <code>str</code> | Criteria for counting HTTP requests to trigger the Rate Limiting action. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.mitigationTimeout">mitigation_timeout</a></code> | <code>typing.Union[int, float]</code> | Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The period of time to consider (in seconds) when evaluating the request rate. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsPerPeriod">requests_per_period</a></code> | <code>typing.Union[int, float]</code> | The number of requests over the period of time that will trigger the Rate Limiting rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsToOrigin">requests_to_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to include requests to origin within the Rate Limiting count. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scorePerPeriod">score_per_period</a></code> | <code>typing.Union[int, float]</code> | The maximum aggregate score over the period of time that will trigger Rate Limiting rule. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scoreResponseHeaderName">score_response_header_name</a></code> | <code>str</code> | Name of HTTP header in the response, set by the origin server, with the score for the current request. |

---

##### `characteristics`<sup>Optional</sup> <a name="characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.characteristics"></a>

```python
characteristics: typing.List[str]
```

- *Type:* typing.List[str]

List of parameters that define how Cloudflare tracks the request rate for this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#characteristics Ruleset#characteristics}

---

##### `counting_expression`<sup>Optional</sup> <a name="counting_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.countingExpression"></a>

```python
counting_expression: str
```

- *Type:* str

Criteria for counting HTTP requests to trigger the Rate Limiting action.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#counting_expression Ruleset#counting_expression}

---

##### `mitigation_timeout`<sup>Optional</sup> <a name="mitigation_timeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.mitigationTimeout"></a>

```python
mitigation_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mitigation_timeout Ruleset#mitigation_timeout}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The period of time to consider (in seconds) when evaluating the request rate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#period Ruleset#period}

---

##### `requests_per_period`<sup>Optional</sup> <a name="requests_per_period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsPerPeriod"></a>

```python
requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of requests over the period of time that will trigger the Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_per_period Ruleset#requests_per_period}

---

##### `requests_to_origin`<sup>Optional</sup> <a name="requests_to_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.requestsToOrigin"></a>

```python
requests_to_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to include requests to origin within the Rate Limiting count.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_to_origin Ruleset#requests_to_origin}

---

##### `score_per_period`<sup>Optional</sup> <a name="score_per_period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scorePerPeriod"></a>

```python
score_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum aggregate score over the period of time that will trigger Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_per_period Ruleset#score_per_period}

---

##### `score_response_header_name`<sup>Optional</sup> <a name="score_response_header_name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit.property.scoreResponseHeaderName"></a>

```python
score_response_header_name: str
```

- *Type:* str

Name of HTTP header in the response, set by the origin server, with the score for the current request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_response_header_name Ruleset#score_response_header_name}

---

## Classes <a name="Classes" id="Classes"></a>

### RulesetRulesActionParametersAutominifyList <a name="RulesetRulesActionParametersAutominifyList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersAutominifyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RulesetRulesActionParametersAutominifyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersAutominify]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>]]

---


### RulesetRulesActionParametersAutominifyOutputReference <a name="RulesetRulesActionParametersAutominifyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersAutominifyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetCss">reset_css</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetHtml">reset_html</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetJs">reset_js</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_css` <a name="reset_css" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetCss"></a>

```python
def reset_css() -> None
```

##### `reset_html` <a name="reset_html" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetHtml"></a>

```python
def reset_html() -> None
```

##### `reset_js` <a name="reset_js" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.resetJs"></a>

```python
def reset_js() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.cssInput">css_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.htmlInput">html_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.jsInput">js_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.css">css</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.html">html</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.js">js</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `css_input`<sup>Optional</sup> <a name="css_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.cssInput"></a>

```python
css_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `html_input`<sup>Optional</sup> <a name="html_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.htmlInput"></a>

```python
html_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `js_input`<sup>Optional</sup> <a name="js_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.jsInput"></a>

```python
js_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `css`<sup>Required</sup> <a name="css" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.css"></a>

```python
css: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `html`<sup>Required</sup> <a name="html" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.html"></a>

```python
html: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `js`<sup>Required</sup> <a name="js" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.js"></a>

```python
js: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RulesetRulesActionParametersAutominify, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>, cdktf.IResolvable]

---


### RulesetRulesActionParametersBrowserTtlOutputReference <a name="RulesetRulesActionParametersBrowserTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersBrowserTtlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resetDefault">reset_default</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default` <a name="reset_default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.default">default</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.default"></a>

```python
default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersBrowserTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetCheckPresence">reset_check_presence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_check_presence` <a name="reset_check_presence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetCheckPresence"></a>

```python
def reset_check_presence() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresenceInput">check_presence_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence">check_presence</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_presence_input`<sup>Optional</sup> <a name="check_presence_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresenceInput"></a>

```python
check_presence_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `check_presence`<sup>Required</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.checkPresence"></a>

```python
check_presence: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersCacheKeyCustomKeyCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetCheckPresence">reset_check_presence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetExcludeOrigin">reset_exclude_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_check_presence` <a name="reset_check_presence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetCheckPresence"></a>

```python
def reset_check_presence() -> None
```

##### `reset_exclude_origin` <a name="reset_exclude_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetExcludeOrigin"></a>

```python
def reset_exclude_origin() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresenceInput">check_presence_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOriginInput">exclude_origin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence">check_presence</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin">exclude_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_presence_input`<sup>Optional</sup> <a name="check_presence_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresenceInput"></a>

```python
check_presence_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_origin_input`<sup>Optional</sup> <a name="exclude_origin_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOriginInput"></a>

```python
exclude_origin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `check_presence`<sup>Required</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.checkPresence"></a>

```python
check_presence: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_origin`<sup>Required</sup> <a name="exclude_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.excludeOrigin"></a>

```python
exclude_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersCacheKeyCustomKeyHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resetResolved">reset_resolved</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resolved` <a name="reset_resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.resetResolved"></a>

```python
def reset_resolved() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolvedInput">resolved_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved">resolved</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resolved_input`<sup>Optional</sup> <a name="resolved_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolvedInput"></a>

```python
resolved_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resolved`<sup>Required</sup> <a name="resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.resolved"></a>

```python
resolved: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersCacheKeyCustomKeyHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie">put_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost">put_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString">put_query_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetCookie">reset_cookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetQueryString">reset_query_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cookie` <a name="put_cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie"></a>

```python
def put_cookie(
  check_presence: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `check_presence`<sup>Optional</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie.parameter.checkPresence"></a>

- *Type:* typing.List[str]

List of cookies to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putCookie.parameter.include"></a>

- *Type:* typing.List[str]

List of cookies to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

##### `put_header` <a name="put_header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader"></a>

```python
def put_header(
  check_presence: typing.List[str] = None,
  exclude_origin: typing.Union[bool, IResolvable] = None,
  include: typing.List[str] = None
) -> None
```

###### `check_presence`<sup>Optional</sup> <a name="check_presence" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader.parameter.checkPresence"></a>

- *Type:* typing.List[str]

List of headers to check for presence in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#check_presence Ruleset#check_presence}

---

###### `exclude_origin`<sup>Optional</sup> <a name="exclude_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader.parameter.excludeOrigin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Exclude the origin header from the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude_origin Ruleset#exclude_origin}

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHeader.parameter.include"></a>

- *Type:* typing.List[str]

List of headers to include in the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

##### `put_host` <a name="put_host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost"></a>

```python
def put_host(
  resolved: typing.Union[bool, IResolvable] = None
) -> None
```

###### `resolved`<sup>Optional</sup> <a name="resolved" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putHost.parameter.resolved"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Resolve hostname to IP address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#resolved Ruleset#resolved}

---

##### `put_query_string` <a name="put_query_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString"></a>

```python
def put_query_string(
  exclude: typing.List[str] = None,
  include: typing.List[str] = None
) -> None
```

###### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString.parameter.exclude"></a>

- *Type:* typing.List[str]

List of query string parameters to exclude from the custom key. Conflicts with "include".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#exclude Ruleset#exclude}

---

###### `include`<sup>Optional</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putQueryString.parameter.include"></a>

- *Type:* typing.List[str]

List of query string parameters to include in the custom key. Conflicts with "exclude".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#include Ruleset#include}

---

##### `put_user` <a name="put_user" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser"></a>

```python
def put_user(
  device_type: typing.Union[bool, IResolvable] = None,
  geo: typing.Union[bool, IResolvable] = None,
  lang: typing.Union[bool, IResolvable] = None
) -> None
```

###### `device_type`<sup>Optional</sup> <a name="device_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser.parameter.deviceType"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Add device type to the custom key. Conflicts with "cache_key.cache_by_device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#device_type Ruleset#device_type}

---

###### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser.parameter.geo"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Add geo data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#geo Ruleset#geo}

---

###### `lang`<sup>Optional</sup> <a name="lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.putUser.parameter.lang"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Add language data to the custom key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#lang Ruleset#lang}

---

##### `reset_cookie` <a name="reset_cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetCookie"></a>

```python
def reset_cookie() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_query_string` <a name="reset_query_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetQueryString"></a>

```python
def reset_query_string() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie">cookie</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host">host</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString">query_string</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user">user</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookieInput">cookie_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.headerInput">header_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.hostInput">host_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryStringInput">query_string_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.userInput">user_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie`<sup>Required</sup> <a name="cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookie"></a>

```python
cookie: RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyCookieOutputReference</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.header"></a>

```python
header: RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHeaderOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.host"></a>

```python
host: RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyHostOutputReference</a>

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryString"></a>

```python
query_string: RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.user"></a>

```python
user: RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference</a>

---

##### `cookie_input`<sup>Optional</sup> <a name="cookie_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.cookieInput"></a>

```python
cookie_input: RulesetRulesActionParametersCacheKeyCustomKeyCookie
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.headerInput"></a>

```python
header_input: RulesetRulesActionParametersCacheKeyCustomKeyHeader
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.hostInput"></a>

```python
host_input: RulesetRulesActionParametersCacheKeyCustomKeyHost
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.queryStringInput"></a>

```python
query_string_input: RulesetRulesActionParametersCacheKeyCustomKeyQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.userInput"></a>

```python
user_input: RulesetRulesActionParametersCacheKeyCustomKeyUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersCacheKeyCustomKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetInclude">reset_include</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude` <a name="reset_exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_include` <a name="reset_include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.resetInclude"></a>

```python
def reset_include() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.excludeInput">exclude_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.includeInput">include_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude">exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include">include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.excludeInput"></a>

```python
exclude_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.includeInput"></a>

```python
include_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.exclude"></a>

```python
exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.include"></a>

```python
include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryStringOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersCacheKeyCustomKeyQueryString
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

---


### RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference <a name="RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetDeviceType">reset_device_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetLang">reset_lang</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_device_type` <a name="reset_device_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetDeviceType"></a>

```python
def reset_device_type() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_lang` <a name="reset_lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.resetLang"></a>

```python
def reset_lang() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceTypeInput">device_type_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geoInput">geo_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.langInput">lang_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType">device_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo">geo</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang">lang</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_type_input`<sup>Optional</sup> <a name="device_type_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceTypeInput"></a>

```python
device_type_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geoInput"></a>

```python
geo_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lang_input`<sup>Optional</sup> <a name="lang_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.langInput"></a>

```python
lang_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_type`<sup>Required</sup> <a name="device_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.deviceType"></a>

```python
device_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.geo"></a>

```python
geo: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.lang"></a>

```python
lang: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUserOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersCacheKeyCustomKeyUser
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

---


### RulesetRulesActionParametersCacheKeyOutputReference <a name="RulesetRulesActionParametersCacheKeyOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersCacheKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey">put_custom_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheByDeviceType">reset_cache_by_device_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheDeceptionArmor">reset_cache_deception_armor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCustomKey">reset_custom_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetIgnoreQueryStringsOrder">reset_ignore_query_strings_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_key` <a name="put_custom_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey"></a>

```python
def put_custom_key(
  cookie: RulesetRulesActionParametersCacheKeyCustomKeyCookie = None,
  header: RulesetRulesActionParametersCacheKeyCustomKeyHeader = None,
  host: RulesetRulesActionParametersCacheKeyCustomKeyHost = None,
  query_string: RulesetRulesActionParametersCacheKeyCustomKeyQueryString = None,
  user: RulesetRulesActionParametersCacheKeyCustomKeyUser = None
) -> None
```

###### `cookie`<sup>Optional</sup> <a name="cookie" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey.parameter.cookie"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyCookie">RulesetRulesActionParametersCacheKeyCustomKeyCookie</a>

cookie block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie Ruleset#cookie}

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey.parameter.header"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHeader">RulesetRulesActionParametersCacheKeyCustomKeyHeader</a>

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#header Ruleset#header}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey.parameter.host"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyHost">RulesetRulesActionParametersCacheKeyCustomKeyHost</a>

host block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

###### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey.parameter.queryString"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyQueryString">RulesetRulesActionParametersCacheKeyCustomKeyQueryString</a>

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query_string Ruleset#query_string}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.putCustomKey.parameter.user"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyUser">RulesetRulesActionParametersCacheKeyCustomKeyUser</a>

user block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#user Ruleset#user}

---

##### `reset_cache_by_device_type` <a name="reset_cache_by_device_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheByDeviceType"></a>

```python
def reset_cache_by_device_type() -> None
```

##### `reset_cache_deception_armor` <a name="reset_cache_deception_armor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCacheDeceptionArmor"></a>

```python
def reset_cache_deception_armor() -> None
```

##### `reset_custom_key` <a name="reset_custom_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetCustomKey"></a>

```python
def reset_custom_key() -> None
```

##### `reset_ignore_query_strings_order` <a name="reset_ignore_query_strings_order" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.resetIgnoreQueryStringsOrder"></a>

```python
def reset_ignore_query_strings_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKey">custom_key</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceTypeInput">cache_by_device_type_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmorInput">cache_deception_armor_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKeyInput">custom_key_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrderInput">ignore_query_strings_order_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType">cache_by_device_type</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor">cache_deception_armor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder">ignore_query_strings_order</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_key`<sup>Required</sup> <a name="custom_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKey"></a>

```python
custom_key: RulesetRulesActionParametersCacheKeyCustomKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKeyOutputReference">RulesetRulesActionParametersCacheKeyCustomKeyOutputReference</a>

---

##### `cache_by_device_type_input`<sup>Optional</sup> <a name="cache_by_device_type_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceTypeInput"></a>

```python
cache_by_device_type_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_deception_armor_input`<sup>Optional</sup> <a name="cache_deception_armor_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmorInput"></a>

```python
cache_deception_armor_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_key_input`<sup>Optional</sup> <a name="custom_key_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.customKeyInput"></a>

```python
custom_key_input: RulesetRulesActionParametersCacheKeyCustomKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

---

##### `ignore_query_strings_order_input`<sup>Optional</sup> <a name="ignore_query_strings_order_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrderInput"></a>

```python
ignore_query_strings_order_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_by_device_type`<sup>Required</sup> <a name="cache_by_device_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheByDeviceType"></a>

```python
cache_by_device_type: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_deception_armor`<sup>Required</sup> <a name="cache_deception_armor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.cacheDeceptionArmor"></a>

```python
cache_deception_armor: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_query_strings_order`<sup>Required</sup> <a name="ignore_query_strings_order" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.ignoreQueryStringsOrder"></a>

```python
ignore_query_strings_order: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersCacheKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---


### RulesetRulesActionParametersEdgeTtlOutputReference <a name="RulesetRulesActionParametersEdgeTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersEdgeTtlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl">put_status_code_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetStatusCodeTtl">reset_status_code_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_status_code_ttl` <a name="put_status_code_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl"></a>

```python
def put_status_code_ttl(
  value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtl]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.putStatusCodeTtl.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>]]

---

##### `reset_default` <a name="reset_default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_status_code_ttl` <a name="reset_status_code_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.resetStatusCodeTtl"></a>

```python
def reset_status_code_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl">status_code_ttl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.defaultInput">default_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtlInput">status_code_ttl_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.default">default</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_code_ttl`<sup>Required</sup> <a name="status_code_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtl"></a>

```python
status_code_ttl: RulesetRulesActionParametersEdgeTtlStatusCodeTtlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlList</a>

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.defaultInput"></a>

```python
default_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `status_code_ttl_input`<sup>Optional</sup> <a name="status_code_ttl_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.statusCodeTtlInput"></a>

```python
status_code_ttl_input: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>]]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.default"></a>

```python
default: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersEdgeTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlList <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>]]

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange">put_status_code_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCodeRange">reset_status_code_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_status_code_range` <a name="put_status_code_range" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange"></a>

```python
def put_status_code_range(
  value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.putStatusCodeRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>]]

---

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```

##### `reset_status_code_range` <a name="reset_status_code_range" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.resetStatusCodeRange"></a>

```python
def reset_status_code_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange">status_code_range</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRangeInput">status_code_range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_code_range`<sup>Required</sup> <a name="status_code_range" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRange"></a>

```python
status_code_range: RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList</a>

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_code_range_input`<sup>Optional</sup> <a name="status_code_range_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCodeRangeInput"></a>

```python
status_code_range_input: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>]]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RulesetRulesActionParametersEdgeTtlStatusCodeTtl, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>, cdktf.IResolvable]

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>]]

---


### RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference <a name="RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetFrom">reset_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetTo">reset_to</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```

##### `reset_to` <a name="reset_to" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.resetTo"></a>

```python
def reset_to() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fromInput">from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.toInput">to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from">from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to">to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.fromInput"></a>

```python
from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.toInput"></a>

```python
to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange">RulesetRulesActionParametersEdgeTtlStatusCodeTtlStatusCodeRange</a>, cdktf.IResolvable]

---


### RulesetRulesActionParametersFromListOutputReference <a name="RulesetRulesActionParametersFromListOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersFromListOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersFromList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---


### RulesetRulesActionParametersFromValueOutputReference <a name="RulesetRulesActionParametersFromValueOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersFromValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl">put_target_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetPreserveQueryString">reset_preserve_query_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetTargetUrl">reset_target_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_url` <a name="put_target_url" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl"></a>

```python
def put_target_url(
  expression: str = None,
  value: str = None
) -> None
```

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl.parameter.expression"></a>

- *Type:* str

Use a value dynamically determined by the Firewall Rules expression language based on Wireshark display filters.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions. Conflicts with `"value"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.putTargetUrl.parameter.value"></a>

- *Type:* str

Static value to provide as the HTTP request header value. Conflicts with `"expression"`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

##### `reset_preserve_query_string` <a name="reset_preserve_query_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetPreserveQueryString"></a>

```python
def reset_preserve_query_string() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```

##### `reset_target_url` <a name="reset_target_url" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.resetTargetUrl"></a>

```python
def reset_target_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrl">target_url</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference">RulesetRulesActionParametersFromValueTargetUrlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryStringInput">preserve_query_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrlInput">target_url_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString">preserve_query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_url`<sup>Required</sup> <a name="target_url" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrl"></a>

```python
target_url: RulesetRulesActionParametersFromValueTargetUrlOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference">RulesetRulesActionParametersFromValueTargetUrlOutputReference</a>

---

##### `preserve_query_string_input`<sup>Optional</sup> <a name="preserve_query_string_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryStringInput"></a>

```python
preserve_query_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_url_input`<sup>Optional</sup> <a name="target_url_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.targetUrlInput"></a>

```python
target_url_input: RulesetRulesActionParametersFromValueTargetUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---

##### `preserve_query_string`<sup>Required</sup> <a name="preserve_query_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.preserveQueryString"></a>

```python
preserve_query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersFromValue
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---


### RulesetRulesActionParametersFromValueTargetUrlOutputReference <a name="RulesetRulesActionParametersFromValueTargetUrlOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrlOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersFromValueTargetUrl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

---


### RulesetRulesActionParametersHeadersList <a name="RulesetRulesActionParametersHeadersList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RulesetRulesActionParametersHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>]]

---


### RulesetRulesActionParametersHeadersOutputReference <a name="RulesetRulesActionParametersHeadersOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_operation` <a name="reset_operation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RulesetRulesActionParametersHeaders, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>, cdktf.IResolvable]

---


### RulesetRulesActionParametersMatchedDataOutputReference <a name="RulesetRulesActionParametersMatchedDataOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersMatchedDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resetPublicKey">reset_public_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_public_key` <a name="reset_public_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.resetPublicKey"></a>

```python
def reset_public_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersMatchedData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---


### RulesetRulesActionParametersOriginOutputReference <a name="RulesetRulesActionParametersOriginOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOriginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---


### RulesetRulesActionParametersOutputReference <a name="RulesetRulesActionParametersOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify">put_autominify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl">put_browser_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey">put_cache_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl">put_edge_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList">put_from_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue">put_from_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData">put_matched_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin">put_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides">put_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse">put_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale">put_serve_stale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni">put_sni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri">put_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutomaticHttpsRewrites">reset_automatic_https_rewrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutominify">reset_autominify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBic">reset_bic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBrowserTtl">reset_browser_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCache">reset_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCacheKey">reset_cache_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCookieFields">reset_cookie_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableApps">reset_disable_apps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableRailgun">reset_disable_railgun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableZaraz">reset_disable_zaraz</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEdgeTtl">reset_edge_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEmailObfuscation">reset_email_obfuscation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromList">reset_from_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromValue">reset_from_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHostHeader">reset_host_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHotlinkProtection">reset_hotlink_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetIncrement">reset_increment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMatchedData">reset_matched_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMirage">reset_mirage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOpportunisticEncryption">reset_opportunistic_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOrigin">reset_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOriginErrorPagePassthru">reset_origin_error_page_passthru</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOverrides">reset_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPhases">reset_phases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPolish">reset_polish</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetProducts">reset_products</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRequestFields">reset_request_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRespectStrongEtags">reset_respect_strong_etags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponse">reset_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponseFields">reset_response_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRocketLoader">reset_rocket_loader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRuleset">reset_ruleset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRulesets">reset_rulesets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSecurityLevel">reset_security_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServerSideExcludes">reset_server_side_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServeStale">reset_serve_stale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSni">reset_sni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSsl">reset_ssl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSxg">reset_sxg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetUri">reset_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autominify` <a name="put_autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify"></a>

```python
def put_autominify(
  value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersAutominify]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putAutominify.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>]]

---

##### `put_browser_ttl` <a name="put_browser_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl"></a>

```python
def put_browser_ttl(
  mode: str,
  default: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl.parameter.mode"></a>

- *Type:* str

Mode of the browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putBrowserTtl.parameter.default"></a>

- *Type:* typing.Union[int, float]

Default browser TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

##### `put_cache_key` <a name="put_cache_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey"></a>

```python
def put_cache_key(
  cache_by_device_type: typing.Union[bool, IResolvable] = None,
  cache_deception_armor: typing.Union[bool, IResolvable] = None,
  custom_key: RulesetRulesActionParametersCacheKeyCustomKey = None,
  ignore_query_strings_order: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cache_by_device_type`<sup>Optional</sup> <a name="cache_by_device_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey.parameter.cacheByDeviceType"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Cache by device type. Conflicts with "custom_key.user.device_type".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_by_device_type Ruleset#cache_by_device_type}

---

###### `cache_deception_armor`<sup>Optional</sup> <a name="cache_deception_armor" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey.parameter.cacheDeceptionArmor"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Cache deception armor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_deception_armor Ruleset#cache_deception_armor}

---

###### `custom_key`<sup>Optional</sup> <a name="custom_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey.parameter.customKey"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyCustomKey">RulesetRulesActionParametersCacheKeyCustomKey</a>

custom_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#custom_key Ruleset#custom_key}

---

###### `ignore_query_strings_order`<sup>Optional</sup> <a name="ignore_query_strings_order" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putCacheKey.parameter.ignoreQueryStringsOrder"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignore query strings order.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ignore_query_strings_order Ruleset#ignore_query_strings_order}

---

##### `put_edge_ttl` <a name="put_edge_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl"></a>

```python
def put_edge_ttl(
  mode: str,
  default: typing.Union[int, float] = None,
  status_code_ttl: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersEdgeTtlStatusCodeTtl]] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl.parameter.mode"></a>

- *Type:* str

Mode of the edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mode Ruleset#mode}

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl.parameter.default"></a>

- *Type:* typing.Union[int, float]

Default edge TTL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#default Ruleset#default}

---

###### `status_code_ttl`<sup>Optional</sup> <a name="status_code_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putEdgeTtl.parameter.statusCodeTtl"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlStatusCodeTtl">RulesetRulesActionParametersEdgeTtlStatusCodeTtl</a>]]

status_code_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code_ttl Ruleset#status_code_ttl}

---

##### `put_from_list` <a name="put_from_list" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList"></a>

```python
def put_from_list(
  key: str,
  name: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList.parameter.key"></a>

- *Type:* str

Expression to use for the list lookup.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#key Ruleset#key}

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromList.parameter.name"></a>

- *Type:* str

Name of the list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#name Ruleset#name}

---

##### `put_from_value` <a name="put_from_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue"></a>

```python
def put_from_value(
  preserve_query_string: typing.Union[bool, IResolvable] = None,
  status_code: typing.Union[int, float] = None,
  target_url: RulesetRulesActionParametersFromValueTargetUrl = None
) -> None
```

###### `preserve_query_string`<sup>Optional</sup> <a name="preserve_query_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue.parameter.preserveQueryString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Preserve query string for redirect URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#preserve_query_string Ruleset#preserve_query_string}

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue.parameter.statusCode"></a>

- *Type:* typing.Union[int, float]

Status code for redirect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

###### `target_url`<sup>Optional</sup> <a name="target_url" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putFromValue.parameter.targetUrl"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueTargetUrl">RulesetRulesActionParametersFromValueTargetUrl</a>

target_url block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#target_url Ruleset#target_url}

---

##### `put_headers` <a name="put_headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>]]

---

##### `put_matched_data` <a name="put_matched_data" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData"></a>

```python
def put_matched_data(
  public_key: str = None
) -> None
```

###### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putMatchedData.parameter.publicKey"></a>

- *Type:* str

Public key to use within WAF Ruleset payload logging to view the HTTP request parameters.

You can generate a public key [using the `matched-data-cli` command-line tool](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/command-line/generate-key-pair) or [in the Cloudflare dashboard](https://developers.cloudflare.com/waf/managed-rulesets/payload-logging/configure).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#public_key Ruleset#public_key}

---

##### `put_origin` <a name="put_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin"></a>

```python
def put_origin(
  host: str = None,
  port: typing.Union[int, float] = None
) -> None
```

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin.parameter.host"></a>

- *Type:* str

Origin Hostname where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host Ruleset#host}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOrigin.parameter.port"></a>

- *Type:* typing.Union[int, float]

Origin Port where request is sent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#port Ruleset#port}

---

##### `put_overrides` <a name="put_overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides"></a>

```python
def put_overrides(
  action: str = None,
  categories: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesCategories]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesRules]] = None,
  sensitivity_level: str = None,
  status: str = None
) -> None
```

###### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides.parameter.action"></a>

- *Type:* str

Action to perform in the rule-level override.

Available values: `block`, `challenge`, `ddos_dynamic`, `execute`, `force_connection_close`, `js_challenge`, `log`, `log_custom_field`, `managed_challenge`, `redirect`, `rewrite`, `route`, `score`, `set_cache_settings`, `set_config`, `serve_error`, `skip`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#action Ruleset#action}

---

###### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides.parameter.categories"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>]]

categories block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#categories Ruleset#categories}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Defines if the current ruleset-level override enables or disables the ruleset.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

###### `sensitivity_level`<sup>Optional</sup> <a name="sensitivity_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides.parameter.sensitivityLevel"></a>

- *Type:* str

Sensitivity level to override for all ruleset rules. Available values: `default`, `medium`, `low`, `eoff`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sensitivity_level Ruleset#sensitivity_level}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putOverrides.parameter.status"></a>

- *Type:* str

Defines if the current ruleset-level override enables or disables the ruleset. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

##### `put_response` <a name="put_response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse"></a>

```python
def put_response(
  value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersResponse]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putResponse.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>]]

---

##### `put_serve_stale` <a name="put_serve_stale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale"></a>

```python
def put_serve_stale(
  disable_stale_while_updating: typing.Union[bool, IResolvable] = None
) -> None
```

###### `disable_stale_while_updating`<sup>Optional</sup> <a name="disable_stale_while_updating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putServeStale.parameter.disableStaleWhileUpdating"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable stale while updating.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_stale_while_updating Ruleset#disable_stale_while_updating}

---

##### `put_sni` <a name="put_sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni"></a>

```python
def put_sni(
  value: str = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putSni.parameter.value"></a>

- *Type:* str

Value to define for SNI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

##### `put_uri` <a name="put_uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri"></a>

```python
def put_uri(
  origin: typing.Union[bool, IResolvable] = None,
  path: RulesetRulesActionParametersUriPath = None,
  query: RulesetRulesActionParametersUriQuery = None
) -> None
```

###### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri.parameter.origin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri.parameter.path"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#path Ruleset#path}

---

###### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.putUri.parameter.query"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#query Ruleset#query}

---

##### `reset_automatic_https_rewrites` <a name="reset_automatic_https_rewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutomaticHttpsRewrites"></a>

```python
def reset_automatic_https_rewrites() -> None
```

##### `reset_autominify` <a name="reset_autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetAutominify"></a>

```python
def reset_autominify() -> None
```

##### `reset_bic` <a name="reset_bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBic"></a>

```python
def reset_bic() -> None
```

##### `reset_browser_ttl` <a name="reset_browser_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetBrowserTtl"></a>

```python
def reset_browser_ttl() -> None
```

##### `reset_cache` <a name="reset_cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCache"></a>

```python
def reset_cache() -> None
```

##### `reset_cache_key` <a name="reset_cache_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCacheKey"></a>

```python
def reset_cache_key() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_cookie_fields` <a name="reset_cookie_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetCookieFields"></a>

```python
def reset_cookie_fields() -> None
```

##### `reset_disable_apps` <a name="reset_disable_apps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableApps"></a>

```python
def reset_disable_apps() -> None
```

##### `reset_disable_railgun` <a name="reset_disable_railgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableRailgun"></a>

```python
def reset_disable_railgun() -> None
```

##### `reset_disable_zaraz` <a name="reset_disable_zaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetDisableZaraz"></a>

```python
def reset_disable_zaraz() -> None
```

##### `reset_edge_ttl` <a name="reset_edge_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEdgeTtl"></a>

```python
def reset_edge_ttl() -> None
```

##### `reset_email_obfuscation` <a name="reset_email_obfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetEmailObfuscation"></a>

```python
def reset_email_obfuscation() -> None
```

##### `reset_from_list` <a name="reset_from_list" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromList"></a>

```python
def reset_from_list() -> None
```

##### `reset_from_value` <a name="reset_from_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetFromValue"></a>

```python
def reset_from_value() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_host_header` <a name="reset_host_header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHostHeader"></a>

```python
def reset_host_header() -> None
```

##### `reset_hotlink_protection` <a name="reset_hotlink_protection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetHotlinkProtection"></a>

```python
def reset_hotlink_protection() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_increment` <a name="reset_increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetIncrement"></a>

```python
def reset_increment() -> None
```

##### `reset_matched_data` <a name="reset_matched_data" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMatchedData"></a>

```python
def reset_matched_data() -> None
```

##### `reset_mirage` <a name="reset_mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetMirage"></a>

```python
def reset_mirage() -> None
```

##### `reset_opportunistic_encryption` <a name="reset_opportunistic_encryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOpportunisticEncryption"></a>

```python
def reset_opportunistic_encryption() -> None
```

##### `reset_origin` <a name="reset_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOrigin"></a>

```python
def reset_origin() -> None
```

##### `reset_origin_error_page_passthru` <a name="reset_origin_error_page_passthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOriginErrorPagePassthru"></a>

```python
def reset_origin_error_page_passthru() -> None
```

##### `reset_overrides` <a name="reset_overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetOverrides"></a>

```python
def reset_overrides() -> None
```

##### `reset_phases` <a name="reset_phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPhases"></a>

```python
def reset_phases() -> None
```

##### `reset_polish` <a name="reset_polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetPolish"></a>

```python
def reset_polish() -> None
```

##### `reset_products` <a name="reset_products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetProducts"></a>

```python
def reset_products() -> None
```

##### `reset_request_fields` <a name="reset_request_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRequestFields"></a>

```python
def reset_request_fields() -> None
```

##### `reset_respect_strong_etags` <a name="reset_respect_strong_etags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRespectStrongEtags"></a>

```python
def reset_respect_strong_etags() -> None
```

##### `reset_response` <a name="reset_response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponse"></a>

```python
def reset_response() -> None
```

##### `reset_response_fields` <a name="reset_response_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetResponseFields"></a>

```python
def reset_response_fields() -> None
```

##### `reset_rocket_loader` <a name="reset_rocket_loader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRocketLoader"></a>

```python
def reset_rocket_loader() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_ruleset` <a name="reset_ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRuleset"></a>

```python
def reset_ruleset() -> None
```

##### `reset_rulesets` <a name="reset_rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetRulesets"></a>

```python
def reset_rulesets() -> None
```

##### `reset_security_level` <a name="reset_security_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSecurityLevel"></a>

```python
def reset_security_level() -> None
```

##### `reset_server_side_excludes` <a name="reset_server_side_excludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServerSideExcludes"></a>

```python
def reset_server_side_excludes() -> None
```

##### `reset_serve_stale` <a name="reset_serve_stale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetServeStale"></a>

```python
def reset_serve_stale() -> None
```

##### `reset_sni` <a name="reset_sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSni"></a>

```python
def reset_sni() -> None
```

##### `reset_ssl` <a name="reset_ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSsl"></a>

```python
def reset_ssl() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```

##### `reset_sxg` <a name="reset_sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetSxg"></a>

```python
def reset_sxg() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominify">autominify</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList">RulesetRulesActionParametersAutominifyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtl">browser_ttl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference">RulesetRulesActionParametersBrowserTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKey">cache_key</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference">RulesetRulesActionParametersCacheKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtl">edge_ttl</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference">RulesetRulesActionParametersEdgeTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromList">from_list</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference">RulesetRulesActionParametersFromListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValue">from_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference">RulesetRulesActionParametersFromValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList">RulesetRulesActionParametersHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedData">matched_data</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference">RulesetRulesActionParametersMatchedDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference">RulesetRulesActionParametersOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference">RulesetRulesActionParametersOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.response">response</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList">RulesetRulesActionParametersResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStale">serve_stale</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference">RulesetRulesActionParametersServeStaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sni">sni</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference">RulesetRulesActionParametersSniOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uri">uri</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference">RulesetRulesActionParametersUriOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewritesInput">automatic_https_rewrites_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominifyInput">autominify_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bicInput">bic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtlInput">browser_ttl_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheInput">cache_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKeyInput">cache_key_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFieldsInput">cookie_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableAppsInput">disable_apps_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgunInput">disable_railgun_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZarazInput">disable_zaraz_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtlInput">edge_ttl_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscationInput">email_obfuscation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromListInput">from_list_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValueInput">from_value_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeaderInput">host_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtectionInput">hotlink_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.incrementInput">increment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedDataInput">matched_data_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirageInput">mirage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryptionInput">opportunistic_encryption_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthruInput">origin_error_page_passthru_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originInput">origin_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overridesInput">overrides_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phasesInput">phases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polishInput">polish_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.productsInput">products_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFieldsInput">request_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtagsInput">respect_strong_etags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFieldsInput">response_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseInput">response_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoaderInput">rocket_loader_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetInput">ruleset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetsInput">rulesets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevelInput">security_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludesInput">server_side_excludes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStaleInput">serve_stale_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sniInput">sni_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sslInput">ssl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxgInput">sxg_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uriInput">uri_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites">automatic_https_rewrites</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bic">bic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cache">cache</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFields">cookie_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableApps">disable_apps</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgun">disable_railgun</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZaraz">disable_zaraz</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscation">email_obfuscation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeader">host_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtection">hotlink_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.increment">increment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirage">mirage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryption">opportunistic_encryption</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthru">origin_error_page_passthru</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phases">phases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polish">polish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.products">products</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFields">request_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtags">respect_strong_etags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFields">response_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoader">rocket_loader</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rules">rules</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ruleset">ruleset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesets">rulesets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevel">security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludes">server_side_excludes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ssl">ssl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxg">sxg</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autominify`<sup>Required</sup> <a name="autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominify"></a>

```python
autominify: RulesetRulesActionParametersAutominifyList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominifyList">RulesetRulesActionParametersAutominifyList</a>

---

##### `browser_ttl`<sup>Required</sup> <a name="browser_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtl"></a>

```python
browser_ttl: RulesetRulesActionParametersBrowserTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtlOutputReference">RulesetRulesActionParametersBrowserTtlOutputReference</a>

---

##### `cache_key`<sup>Required</sup> <a name="cache_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKey"></a>

```python
cache_key: RulesetRulesActionParametersCacheKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKeyOutputReference">RulesetRulesActionParametersCacheKeyOutputReference</a>

---

##### `edge_ttl`<sup>Required</sup> <a name="edge_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtl"></a>

```python
edge_ttl: RulesetRulesActionParametersEdgeTtlOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtlOutputReference">RulesetRulesActionParametersEdgeTtlOutputReference</a>

---

##### `from_list`<sup>Required</sup> <a name="from_list" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromList"></a>

```python
from_list: RulesetRulesActionParametersFromListOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromListOutputReference">RulesetRulesActionParametersFromListOutputReference</a>

---

##### `from_value`<sup>Required</sup> <a name="from_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValue"></a>

```python
from_value: RulesetRulesActionParametersFromValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValueOutputReference">RulesetRulesActionParametersFromValueOutputReference</a>

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headers"></a>

```python
headers: RulesetRulesActionParametersHeadersList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeadersList">RulesetRulesActionParametersHeadersList</a>

---

##### `matched_data`<sup>Required</sup> <a name="matched_data" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedData"></a>

```python
matched_data: RulesetRulesActionParametersMatchedDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedDataOutputReference">RulesetRulesActionParametersMatchedDataOutputReference</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.origin"></a>

```python
origin: RulesetRulesActionParametersOriginOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOriginOutputReference">RulesetRulesActionParametersOriginOutputReference</a>

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overrides"></a>

```python
overrides: RulesetRulesActionParametersOverridesOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference">RulesetRulesActionParametersOverridesOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.response"></a>

```python
response: RulesetRulesActionParametersResponseList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList">RulesetRulesActionParametersResponseList</a>

---

##### `serve_stale`<sup>Required</sup> <a name="serve_stale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStale"></a>

```python
serve_stale: RulesetRulesActionParametersServeStaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference">RulesetRulesActionParametersServeStaleOutputReference</a>

---

##### `sni`<sup>Required</sup> <a name="sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sni"></a>

```python
sni: RulesetRulesActionParametersSniOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference">RulesetRulesActionParametersSniOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uri"></a>

```python
uri: RulesetRulesActionParametersUriOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference">RulesetRulesActionParametersUriOutputReference</a>

---

##### `automatic_https_rewrites_input`<sup>Optional</sup> <a name="automatic_https_rewrites_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewritesInput"></a>

```python
automatic_https_rewrites_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autominify_input`<sup>Optional</sup> <a name="autominify_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.autominifyInput"></a>

```python
autominify_input: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersAutominify]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>]]

---

##### `bic_input`<sup>Optional</sup> <a name="bic_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bicInput"></a>

```python
bic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `browser_ttl_input`<sup>Optional</sup> <a name="browser_ttl_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.browserTtlInput"></a>

```python
browser_ttl_input: RulesetRulesActionParametersBrowserTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

---

##### `cache_input`<sup>Optional</sup> <a name="cache_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheInput"></a>

```python
cache_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache_key_input`<sup>Optional</sup> <a name="cache_key_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cacheKeyInput"></a>

```python
cache_key_input: RulesetRulesActionParametersCacheKey
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `cookie_fields_input`<sup>Optional</sup> <a name="cookie_fields_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFieldsInput"></a>

```python
cookie_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disable_apps_input`<sup>Optional</sup> <a name="disable_apps_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableAppsInput"></a>

```python
disable_apps_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_railgun_input`<sup>Optional</sup> <a name="disable_railgun_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgunInput"></a>

```python
disable_railgun_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_zaraz_input`<sup>Optional</sup> <a name="disable_zaraz_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZarazInput"></a>

```python
disable_zaraz_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `edge_ttl_input`<sup>Optional</sup> <a name="edge_ttl_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.edgeTtlInput"></a>

```python
edge_ttl_input: RulesetRulesActionParametersEdgeTtl
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

---

##### `email_obfuscation_input`<sup>Optional</sup> <a name="email_obfuscation_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscationInput"></a>

```python
email_obfuscation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `from_list_input`<sup>Optional</sup> <a name="from_list_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromListInput"></a>

```python
from_list_input: RulesetRulesActionParametersFromList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

---

##### `from_value_input`<sup>Optional</sup> <a name="from_value_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.fromValueInput"></a>

```python
from_value_input: RulesetRulesActionParametersFromValue
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>]]

---

##### `host_header_input`<sup>Optional</sup> <a name="host_header_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeaderInput"></a>

```python
host_header_input: str
```

- *Type:* str

---

##### `hotlink_protection_input`<sup>Optional</sup> <a name="hotlink_protection_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtectionInput"></a>

```python
hotlink_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `increment_input`<sup>Optional</sup> <a name="increment_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.incrementInput"></a>

```python
increment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matched_data_input`<sup>Optional</sup> <a name="matched_data_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.matchedDataInput"></a>

```python
matched_data_input: RulesetRulesActionParametersMatchedData
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

---

##### `mirage_input`<sup>Optional</sup> <a name="mirage_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirageInput"></a>

```python
mirage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `opportunistic_encryption_input`<sup>Optional</sup> <a name="opportunistic_encryption_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryptionInput"></a>

```python
opportunistic_encryption_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_error_page_passthru_input`<sup>Optional</sup> <a name="origin_error_page_passthru_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthruInput"></a>

```python
origin_error_page_passthru_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originInput"></a>

```python
origin_input: RulesetRulesActionParametersOrigin
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

---

##### `overrides_input`<sup>Optional</sup> <a name="overrides_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.overridesInput"></a>

```python
overrides_input: RulesetRulesActionParametersOverrides
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---

##### `phases_input`<sup>Optional</sup> <a name="phases_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phasesInput"></a>

```python
phases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `polish_input`<sup>Optional</sup> <a name="polish_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polishInput"></a>

```python
polish_input: str
```

- *Type:* str

---

##### `products_input`<sup>Optional</sup> <a name="products_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.productsInput"></a>

```python
products_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_fields_input`<sup>Optional</sup> <a name="request_fields_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFieldsInput"></a>

```python
request_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `respect_strong_etags_input`<sup>Optional</sup> <a name="respect_strong_etags_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtagsInput"></a>

```python
respect_strong_etags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `response_fields_input`<sup>Optional</sup> <a name="response_fields_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFieldsInput"></a>

```python
response_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseInput"></a>

```python
response_input: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersResponse]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>]]

---

##### `rocket_loader_input`<sup>Optional</sup> <a name="rocket_loader_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoaderInput"></a>

```python
rocket_loader_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ruleset_input`<sup>Optional</sup> <a name="ruleset_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetInput"></a>

```python
ruleset_input: str
```

- *Type:* str

---

##### `rulesets_input`<sup>Optional</sup> <a name="rulesets_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesetsInput"></a>

```python
rulesets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `security_level_input`<sup>Optional</sup> <a name="security_level_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevelInput"></a>

```python
security_level_input: str
```

- *Type:* str

---

##### `server_side_excludes_input`<sup>Optional</sup> <a name="server_side_excludes_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludesInput"></a>

```python
server_side_excludes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `serve_stale_input`<sup>Optional</sup> <a name="serve_stale_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serveStaleInput"></a>

```python
serve_stale_input: RulesetRulesActionParametersServeStale
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---

##### `sni_input`<sup>Optional</sup> <a name="sni_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sniInput"></a>

```python
sni_input: RulesetRulesActionParametersSni
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---

##### `ssl_input`<sup>Optional</sup> <a name="ssl_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sslInput"></a>

```python
ssl_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sxg_input`<sup>Optional</sup> <a name="sxg_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxgInput"></a>

```python
sxg_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.uriInput"></a>

```python
uri_input: RulesetRulesActionParametersUri
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `automatic_https_rewrites`<sup>Required</sup> <a name="automatic_https_rewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.automaticHttpsRewrites"></a>

```python
automatic_https_rewrites: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `bic`<sup>Required</sup> <a name="bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.bic"></a>

```python
bic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cache"></a>

```python
cache: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `cookie_fields`<sup>Required</sup> <a name="cookie_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.cookieFields"></a>

```python
cookie_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disable_apps`<sup>Required</sup> <a name="disable_apps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableApps"></a>

```python
disable_apps: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_railgun`<sup>Required</sup> <a name="disable_railgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableRailgun"></a>

```python
disable_railgun: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_zaraz`<sup>Required</sup> <a name="disable_zaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.disableZaraz"></a>

```python
disable_zaraz: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_obfuscation`<sup>Required</sup> <a name="email_obfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.emailObfuscation"></a>

```python
email_obfuscation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `host_header`<sup>Required</sup> <a name="host_header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hostHeader"></a>

```python
host_header: str
```

- *Type:* str

---

##### `hotlink_protection`<sup>Required</sup> <a name="hotlink_protection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.hotlinkProtection"></a>

```python
hotlink_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `increment`<sup>Required</sup> <a name="increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.increment"></a>

```python
increment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mirage`<sup>Required</sup> <a name="mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.mirage"></a>

```python
mirage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `opportunistic_encryption`<sup>Required</sup> <a name="opportunistic_encryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.opportunisticEncryption"></a>

```python
opportunistic_encryption: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_error_page_passthru`<sup>Required</sup> <a name="origin_error_page_passthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.originErrorPagePassthru"></a>

```python
origin_error_page_passthru: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `phases`<sup>Required</sup> <a name="phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.phases"></a>

```python
phases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `polish`<sup>Required</sup> <a name="polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.polish"></a>

```python
polish: str
```

- *Type:* str

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.products"></a>

```python
products: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_fields`<sup>Required</sup> <a name="request_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.requestFields"></a>

```python
request_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `respect_strong_etags`<sup>Required</sup> <a name="respect_strong_etags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.respectStrongEtags"></a>

```python
respect_strong_etags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `response_fields`<sup>Required</sup> <a name="response_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.responseFields"></a>

```python
response_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rocket_loader`<sup>Required</sup> <a name="rocket_loader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rocketLoader"></a>

```python
rocket_loader: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rules"></a>

```python
rules: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ruleset`<sup>Required</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ruleset"></a>

```python
ruleset: str
```

- *Type:* str

---

##### `rulesets`<sup>Required</sup> <a name="rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.rulesets"></a>

```python
rulesets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_level`<sup>Required</sup> <a name="security_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

---

##### `server_side_excludes`<sup>Required</sup> <a name="server_side_excludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.serverSideExcludes"></a>

```python
server_side_excludes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl`<sup>Required</sup> <a name="ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.ssl"></a>

```python
ssl: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sxg`<sup>Required</sup> <a name="sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.sxg"></a>

```python
sxg: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParameters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---


### RulesetRulesActionParametersOverridesCategoriesList <a name="RulesetRulesActionParametersOverridesCategoriesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOverridesCategoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RulesetRulesActionParametersOverridesCategoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesCategories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>]]

---


### RulesetRulesActionParametersOverridesCategoriesOutputReference <a name="RulesetRulesActionParametersOverridesCategoriesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_category` <a name="reset_category" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RulesetRulesActionParametersOverridesCategories, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>, cdktf.IResolvable]

---


### RulesetRulesActionParametersOverridesOutputReference <a name="RulesetRulesActionParametersOverridesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories">put_categories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetCategories">reset_categories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetRules">reset_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetSensitivityLevel">reset_sensitivity_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_categories` <a name="put_categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories"></a>

```python
def put_categories(
  value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesCategories]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putCategories.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>]]

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_categories` <a name="reset_categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetCategories"></a>

```python
def reset_categories() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```

##### `reset_sensitivity_level` <a name="reset_sensitivity_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetSensitivityLevel"></a>

```python
def reset_sensitivity_level() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categories">categories</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList">RulesetRulesActionParametersOverridesCategoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList">RulesetRulesActionParametersOverridesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categoriesInput">categories_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevelInput">sensitivity_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel">sensitivity_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categories"></a>

```python
categories: RulesetRulesActionParametersOverridesCategoriesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategoriesList">RulesetRulesActionParametersOverridesCategoriesList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rules"></a>

```python
rules: RulesetRulesActionParametersOverridesRulesList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList">RulesetRulesActionParametersOverridesRulesList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `categories_input`<sup>Optional</sup> <a name="categories_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.categoriesInput"></a>

```python
categories_input: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesCategories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesCategories">RulesetRulesActionParametersOverridesCategories</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>]]

---

##### `sensitivity_level_input`<sup>Optional</sup> <a name="sensitivity_level_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevelInput"></a>

```python
sensitivity_level_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sensitivity_level`<sup>Required</sup> <a name="sensitivity_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.sensitivityLevel"></a>

```python
sensitivity_level: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersOverrides
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

---


### RulesetRulesActionParametersOverridesRulesList <a name="RulesetRulesActionParametersOverridesRulesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOverridesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RulesetRulesActionParametersOverridesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersOverridesRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>]]

---


### RulesetRulesActionParametersOverridesRulesOutputReference <a name="RulesetRulesActionParametersOverridesRulesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersOverridesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetScoreThreshold">reset_score_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetSensitivityLevel">reset_sensitivity_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_score_threshold` <a name="reset_score_threshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetScoreThreshold"></a>

```python
def reset_score_threshold() -> None
```

##### `reset_sensitivity_level` <a name="reset_sensitivity_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetSensitivityLevel"></a>

```python
def reset_sensitivity_level() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThresholdInput">score_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevelInput">sensitivity_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold">score_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel">sensitivity_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `score_threshold_input`<sup>Optional</sup> <a name="score_threshold_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThresholdInput"></a>

```python
score_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sensitivity_level_input`<sup>Optional</sup> <a name="sensitivity_level_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevelInput"></a>

```python
sensitivity_level_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `score_threshold`<sup>Required</sup> <a name="score_threshold" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.scoreThreshold"></a>

```python
score_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sensitivity_level`<sup>Required</sup> <a name="sensitivity_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.sensitivityLevel"></a>

```python
sensitivity_level: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RulesetRulesActionParametersOverridesRules, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverridesRules">RulesetRulesActionParametersOverridesRules</a>, cdktf.IResolvable]

---


### RulesetRulesActionParametersResponseList <a name="RulesetRulesActionParametersResponseList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersResponseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RulesetRulesActionParametersResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersResponse]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>]]

---


### RulesetRulesActionParametersResponseOutputReference <a name="RulesetRulesActionParametersResponseOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RulesetRulesActionParametersResponse, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>, cdktf.IResolvable]

---


### RulesetRulesActionParametersServeStaleOutputReference <a name="RulesetRulesActionParametersServeStaleOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersServeStaleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resetDisableStaleWhileUpdating">reset_disable_stale_while_updating</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_stale_while_updating` <a name="reset_disable_stale_while_updating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.resetDisableStaleWhileUpdating"></a>

```python
def reset_disable_stale_while_updating() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdatingInput">disable_stale_while_updating_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating">disable_stale_while_updating</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_stale_while_updating_input`<sup>Optional</sup> <a name="disable_stale_while_updating_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdatingInput"></a>

```python
disable_stale_while_updating_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_stale_while_updating`<sup>Required</sup> <a name="disable_stale_while_updating" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.disableStaleWhileUpdating"></a>

```python
disable_stale_while_updating: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStaleOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersServeStale
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

---


### RulesetRulesActionParametersSniOutputReference <a name="RulesetRulesActionParametersSniOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersSniOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSniOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersSni
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

---


### RulesetRulesActionParametersUriOutputReference <a name="RulesetRulesActionParametersUriOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersUriOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath">put_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery">put_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetOrigin">reset_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetQuery">reset_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_path` <a name="put_path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath"></a>

```python
def put_path(
  expression: str = None,
  value: str = None
) -> None
```

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath.parameter.expression"></a>

- *Type:* str

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putPath.parameter.value"></a>

- *Type:* str

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

##### `put_query` <a name="put_query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery"></a>

```python
def put_query(
  expression: str = None,
  value: str = None
) -> None
```

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery.parameter.expression"></a>

- *Type:* str

Expression that defines the updated (dynamic) value of the URI path or query string component.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#expression Ruleset#expression}

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.putQuery.parameter.value"></a>

- *Type:* str

Static string value of the updated URI path or query string component.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#value Ruleset#value}

---

##### `reset_origin` <a name="reset_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetOrigin"></a>

```python
def reset_origin() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_query` <a name="reset_query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference">RulesetRulesActionParametersUriPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference">RulesetRulesActionParametersUriQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.originInput">origin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.pathInput">path_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.queryInput">query_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.origin">origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.path"></a>

```python
path: RulesetRulesActionParametersUriPathOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference">RulesetRulesActionParametersUriPathOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.query"></a>

```python
query: RulesetRulesActionParametersUriQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference">RulesetRulesActionParametersUriQueryOutputReference</a>

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.originInput"></a>

```python
origin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.pathInput"></a>

```python
path_input: RulesetRulesActionParametersUriPath
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.queryInput"></a>

```python
query_input: RulesetRulesActionParametersUriQuery
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.origin"></a>

```python
origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersUri
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

---


### RulesetRulesActionParametersUriPathOutputReference <a name="RulesetRulesActionParametersUriPathOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersUriPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPathOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersUriPath
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriPath">RulesetRulesActionParametersUriPath</a>

---


### RulesetRulesActionParametersUriQueryOutputReference <a name="RulesetRulesActionParametersUriQueryOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesActionParametersUriQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQueryOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesActionParametersUriQuery
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUriQuery">RulesetRulesActionParametersUriQuery</a>

---


### RulesetRulesExposedCredentialCheckOutputReference <a name="RulesetRulesExposedCredentialCheckOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesExposedCredentialCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetPasswordExpression">reset_password_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetUsernameExpression">reset_username_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password_expression` <a name="reset_password_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetPasswordExpression"></a>

```python
def reset_password_expression() -> None
```

##### `reset_username_expression` <a name="reset_username_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.resetUsernameExpression"></a>

```python
def reset_username_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpressionInput">password_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpressionInput">username_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression">password_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression">username_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_expression_input`<sup>Optional</sup> <a name="password_expression_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpressionInput"></a>

```python
password_expression_input: str
```

- *Type:* str

---

##### `username_expression_input`<sup>Optional</sup> <a name="username_expression_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpressionInput"></a>

```python
username_expression_input: str
```

- *Type:* str

---

##### `password_expression`<sup>Required</sup> <a name="password_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.passwordExpression"></a>

```python
password_expression: str
```

- *Type:* str

---

##### `username_expression`<sup>Required</sup> <a name="username_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.usernameExpression"></a>

```python
username_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesExposedCredentialCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---


### RulesetRulesList <a name="RulesetRulesList" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RulesetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RulesetRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>]]

---


### RulesetRulesLoggingOutputReference <a name="RulesetRulesLoggingOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---


### RulesetRulesOutputReference <a name="RulesetRulesOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters">put_action_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck">put_exposed_credential_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit">put_ratelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetActionParameters">reset_action_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetExposedCredentialCheck">reset_exposed_credential_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLastUpdated">reset_last_updated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetRatelimit">reset_ratelimit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action_parameters` <a name="put_action_parameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters"></a>

```python
def put_action_parameters(
  automatic_https_rewrites: typing.Union[bool, IResolvable] = None,
  autominify: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersAutominify]] = None,
  bic: typing.Union[bool, IResolvable] = None,
  browser_ttl: RulesetRulesActionParametersBrowserTtl = None,
  cache: typing.Union[bool, IResolvable] = None,
  cache_key: RulesetRulesActionParametersCacheKey = None,
  content: str = None,
  content_type: str = None,
  cookie_fields: typing.List[str] = None,
  disable_apps: typing.Union[bool, IResolvable] = None,
  disable_railgun: typing.Union[bool, IResolvable] = None,
  disable_zaraz: typing.Union[bool, IResolvable] = None,
  edge_ttl: RulesetRulesActionParametersEdgeTtl = None,
  email_obfuscation: typing.Union[bool, IResolvable] = None,
  from_list: RulesetRulesActionParametersFromList = None,
  from_value: RulesetRulesActionParametersFromValue = None,
  headers: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersHeaders]] = None,
  host_header: str = None,
  hotlink_protection: typing.Union[bool, IResolvable] = None,
  id: str = None,
  increment: typing.Union[int, float] = None,
  matched_data: RulesetRulesActionParametersMatchedData = None,
  mirage: typing.Union[bool, IResolvable] = None,
  opportunistic_encryption: typing.Union[bool, IResolvable] = None,
  origin: RulesetRulesActionParametersOrigin = None,
  origin_error_page_passthru: typing.Union[bool, IResolvable] = None,
  overrides: RulesetRulesActionParametersOverrides = None,
  phases: typing.List[str] = None,
  polish: str = None,
  products: typing.List[str] = None,
  request_fields: typing.List[str] = None,
  respect_strong_etags: typing.Union[bool, IResolvable] = None,
  response: typing.Union[IResolvable, typing.List[RulesetRulesActionParametersResponse]] = None,
  response_fields: typing.List[str] = None,
  rocket_loader: typing.Union[bool, IResolvable] = None,
  rules: typing.Mapping[str] = None,
  ruleset: str = None,
  rulesets: typing.List[str] = None,
  security_level: str = None,
  server_side_excludes: typing.Union[bool, IResolvable] = None,
  serve_stale: RulesetRulesActionParametersServeStale = None,
  sni: RulesetRulesActionParametersSni = None,
  ssl: str = None,
  status_code: typing.Union[int, float] = None,
  sxg: typing.Union[bool, IResolvable] = None,
  uri: RulesetRulesActionParametersUri = None,
  version: str = None
) -> None
```

###### `automatic_https_rewrites`<sup>Optional</sup> <a name="automatic_https_rewrites" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.automaticHttpsRewrites"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off Cloudflare Automatic HTTPS rewrites.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#automatic_https_rewrites Ruleset#automatic_https_rewrites}

---

###### `autominify`<sup>Optional</sup> <a name="autominify" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.autominify"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersAutominify">RulesetRulesActionParametersAutominify</a>]]

autominify block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#autominify Ruleset#autominify}

---

###### `bic`<sup>Optional</sup> <a name="bic" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.bic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Inspect the visitor's browser for headers commonly associated with spammers and certain bots.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#bic Ruleset#bic}

---

###### `browser_ttl`<sup>Optional</sup> <a name="browser_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.browserTtl"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersBrowserTtl">RulesetRulesActionParametersBrowserTtl</a>

browser_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#browser_ttl Ruleset#browser_ttl}

---

###### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.cache"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to cache if expression matches.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache Ruleset#cache}

---

###### `cache_key`<sup>Optional</sup> <a name="cache_key" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.cacheKey"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersCacheKey">RulesetRulesActionParametersCacheKey</a>

cache_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cache_key Ruleset#cache_key}

---

###### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.content"></a>

- *Type:* str

Content of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content Ruleset#content}

---

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.contentType"></a>

- *Type:* str

Content-Type of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#content_type Ruleset#content_type}

---

###### `cookie_fields`<sup>Optional</sup> <a name="cookie_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.cookieFields"></a>

- *Type:* typing.List[str]

List of cookie values to include as part of custom fields logging.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#cookie_fields Ruleset#cookie_fields}

---

###### `disable_apps`<sup>Optional</sup> <a name="disable_apps" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.disableApps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn off all active Cloudflare Apps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_apps Ruleset#disable_apps}

---

###### `disable_railgun`<sup>Optional</sup> <a name="disable_railgun" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.disableRailgun"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn off railgun feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_railgun Ruleset#disable_railgun}

---

###### `disable_zaraz`<sup>Optional</sup> <a name="disable_zaraz" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.disableZaraz"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn off zaraz feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#disable_zaraz Ruleset#disable_zaraz}

---

###### `edge_ttl`<sup>Optional</sup> <a name="edge_ttl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.edgeTtl"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersEdgeTtl">RulesetRulesActionParametersEdgeTtl</a>

edge_ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#edge_ttl Ruleset#edge_ttl}

---

###### `email_obfuscation`<sup>Optional</sup> <a name="email_obfuscation" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.emailObfuscation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the Cloudflare Email Obfuscation feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#email_obfuscation Ruleset#email_obfuscation}

---

###### `from_list`<sup>Optional</sup> <a name="from_list" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.fromList"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromList">RulesetRulesActionParametersFromList</a>

from_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_list Ruleset#from_list}

---

###### `from_value`<sup>Optional</sup> <a name="from_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.fromValue"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersFromValue">RulesetRulesActionParametersFromValue</a>

from_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#from_value Ruleset#from_value}

---

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.headers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersHeaders">RulesetRulesActionParametersHeaders</a>]]

headers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#headers Ruleset#headers}

---

###### `host_header`<sup>Optional</sup> <a name="host_header" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.hostHeader"></a>

- *Type:* str

Host Header that request origin receives.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#host_header Ruleset#host_header}

---

###### `hotlink_protection`<sup>Optional</sup> <a name="hotlink_protection" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.hotlinkProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the hotlink protection feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#hotlink_protection Ruleset#hotlink_protection}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.id"></a>

- *Type:* str

Identifier of the action parameter to modify.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#id Ruleset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `increment`<sup>Optional</sup> <a name="increment" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.increment"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#increment Ruleset#increment}.

---

###### `matched_data`<sup>Optional</sup> <a name="matched_data" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.matchedData"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersMatchedData">RulesetRulesActionParametersMatchedData</a>

matched_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#matched_data Ruleset#matched_data}

---

###### `mirage`<sup>Optional</sup> <a name="mirage" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.mirage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off Cloudflare Mirage of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mirage Ruleset#mirage}

---

###### `opportunistic_encryption`<sup>Optional</sup> <a name="opportunistic_encryption" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.opportunisticEncryption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the Cloudflare Opportunistic Encryption feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#opportunistic_encryption Ruleset#opportunistic_encryption}

---

###### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.origin"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOrigin">RulesetRulesActionParametersOrigin</a>

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin Ruleset#origin}

---

###### `origin_error_page_passthru`<sup>Optional</sup> <a name="origin_error_page_passthru" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.originErrorPagePassthru"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Pass-through error page for origin.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#origin_error_page_passthru Ruleset#origin_error_page_passthru}

---

###### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.overrides"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOverrides">RulesetRulesActionParametersOverrides</a>

overrides block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#overrides Ruleset#overrides}

---

###### `phases`<sup>Optional</sup> <a name="phases" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.phases"></a>

- *Type:* typing.List[str]

Point in the request/response lifecycle where the ruleset will be created.

Available values: `ddos_l4`, `ddos_l7`, `http_custom_errors`, `http_log_custom_fields`, `http_request_cache_settings`, `http_request_firewall_custom`, `http_request_firewall_managed`, `http_request_late_transform`, `http_request_late_transform_managed`, `http_request_main`, `http_request_origin`, `http_request_dynamic_redirect`, `http_request_redirect`, `http_request_sanitize`, `http_request_transform`, `http_response_firewall_managed`, `http_response_headers_transform`, `http_response_headers_transform_managed`, `magic_transit`, `http_ratelimit`, `http_request_sbfm`, `http_config_settings`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#phases Ruleset#phases}

---

###### `polish`<sup>Optional</sup> <a name="polish" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.polish"></a>

- *Type:* str

Apply options from the Polish feature of the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#polish Ruleset#polish}

---

###### `products`<sup>Optional</sup> <a name="products" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.products"></a>

- *Type:* typing.List[str]

Products to target with the actions. Available values: `bic`, `hot`, `ratelimit`, `securityLevel`, `uablock`, `waf`, `zonelockdown`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#products Ruleset#products}

---

###### `request_fields`<sup>Optional</sup> <a name="request_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.requestFields"></a>

- *Type:* typing.List[str]

List of request headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#request_fields Ruleset#request_fields}

---

###### `respect_strong_etags`<sup>Optional</sup> <a name="respect_strong_etags" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.respectStrongEtags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Respect strong ETags.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#respect_strong_etags Ruleset#respect_strong_etags}

---

###### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.response"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersResponse">RulesetRulesActionParametersResponse</a>]]

response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response Ruleset#response}

---

###### `response_fields`<sup>Optional</sup> <a name="response_fields" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.responseFields"></a>

- *Type:* typing.List[str]

List of response headers to include as part of custom fields logging, in lowercase.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#response_fields Ruleset#response_fields}

---

###### `rocket_loader`<sup>Optional</sup> <a name="rocket_loader" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.rocketLoader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off Cloudflare Rocket Loader in the Cloudflare Speed app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rocket_loader Ruleset#rocket_loader}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.rules"></a>

- *Type:* typing.Mapping[str]

Map of managed WAF rule ID to comma-delimited string of ruleset rule IDs.

Example: `rules = { "efb7b8c949ac4650a09736fc376e9aee" = "5de7edfa648c4d6891dc3e7f84534ffa,e3a567afc347477d9702d9047e97d760" }`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rules Ruleset#rules}

---

###### `ruleset`<sup>Optional</sup> <a name="ruleset" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.ruleset"></a>

- *Type:* str

Which ruleset ID to target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ruleset Ruleset#ruleset}

---

###### `rulesets`<sup>Optional</sup> <a name="rulesets" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.rulesets"></a>

- *Type:* typing.List[str]

List of managed WAF rule IDs to target. Only valid when the `"action"` is set to skip.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#rulesets Ruleset#rulesets}

---

###### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.securityLevel"></a>

- *Type:* str

Control options for the Security Level feature from the Security app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#security_level Ruleset#security_level}

---

###### `server_side_excludes`<sup>Optional</sup> <a name="server_side_excludes" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.serverSideExcludes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the Server Side Excludes feature of the Cloudflare Scrape Shield app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#server_side_excludes Ruleset#server_side_excludes}

---

###### `serve_stale`<sup>Optional</sup> <a name="serve_stale" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.serveStale"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersServeStale">RulesetRulesActionParametersServeStale</a>

serve_stale block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#serve_stale Ruleset#serve_stale}

---

###### `sni`<sup>Optional</sup> <a name="sni" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.sni"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersSni">RulesetRulesActionParametersSni</a>

sni block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sni Ruleset#sni}

---

###### `ssl`<sup>Optional</sup> <a name="ssl" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.ssl"></a>

- *Type:* str

Control options for the SSL feature of the Edge Certificates tab in the Cloudflare SSL/TLS app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#ssl Ruleset#ssl}

---

###### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.statusCode"></a>

- *Type:* typing.Union[int, float]

HTTP status code of the custom error response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status_code Ruleset#status_code}

---

###### `sxg`<sup>Optional</sup> <a name="sxg" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.sxg"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Turn on or off the SXG feature.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#sxg Ruleset#sxg}

---

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.uri"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersUri">RulesetRulesActionParametersUri</a>

uri block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#uri Ruleset#uri}

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putActionParameters.parameter.version"></a>

- *Type:* str

Version of the ruleset to deploy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#version Ruleset#version}

---

##### `put_exposed_credential_check` <a name="put_exposed_credential_check" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck"></a>

```python
def put_exposed_credential_check(
  password_expression: str = None,
  username_expression: str = None
) -> None
```

###### `password_expression`<sup>Optional</sup> <a name="password_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck.parameter.passwordExpression"></a>

- *Type:* str

Firewall Rules expression language based on Wireshark display filters for where to check for the "password" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#password_expression Ruleset#password_expression}

---

###### `username_expression`<sup>Optional</sup> <a name="username_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putExposedCredentialCheck.parameter.usernameExpression"></a>

- *Type:* str

Firewall Rules expression language based on Wireshark display filters for where to check for the "username" value.

Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#username_expression Ruleset#username_expression}

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging"></a>

```python
def put_logging(
  enabled: typing.Union[bool, IResolvable] = None,
  status: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Override the default logging behavior when a rule is matched.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#enabled Ruleset#enabled}

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putLogging.parameter.status"></a>

- *Type:* str

Override the default logging behavior when a rule is matched. Available values: `enabled`, `disabled`. Defaults to `""`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#status Ruleset#status}

---

##### `put_ratelimit` <a name="put_ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit"></a>

```python
def put_ratelimit(
  characteristics: typing.List[str] = None,
  counting_expression: str = None,
  mitigation_timeout: typing.Union[int, float] = None,
  period: typing.Union[int, float] = None,
  requests_per_period: typing.Union[int, float] = None,
  requests_to_origin: typing.Union[bool, IResolvable] = None,
  score_per_period: typing.Union[int, float] = None,
  score_response_header_name: str = None
) -> None
```

###### `characteristics`<sup>Optional</sup> <a name="characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.characteristics"></a>

- *Type:* typing.List[str]

List of parameters that define how Cloudflare tracks the request rate for this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#characteristics Ruleset#characteristics}

---

###### `counting_expression`<sup>Optional</sup> <a name="counting_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.countingExpression"></a>

- *Type:* str

Criteria for counting HTTP requests to trigger the Rate Limiting action.

Uses the Firewall Rules expression language based on Wireshark display filters. Refer to the [Firewall Rules language](https://developers.cloudflare.com/firewall/cf-firewall-language) documentation for all available fields, operators, and functions.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#counting_expression Ruleset#counting_expression}

---

###### `mitigation_timeout`<sup>Optional</sup> <a name="mitigation_timeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.mitigationTimeout"></a>

- *Type:* typing.Union[int, float]

Once the request rate is reached, the Rate Limiting rule blocks further requests for the period of time defined in this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#mitigation_timeout Ruleset#mitigation_timeout}

---

###### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.period"></a>

- *Type:* typing.Union[int, float]

The period of time to consider (in seconds) when evaluating the request rate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#period Ruleset#period}

---

###### `requests_per_period`<sup>Optional</sup> <a name="requests_per_period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.requestsPerPeriod"></a>

- *Type:* typing.Union[int, float]

The number of requests over the period of time that will trigger the Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_per_period Ruleset#requests_per_period}

---

###### `requests_to_origin`<sup>Optional</sup> <a name="requests_to_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.requestsToOrigin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to include requests to origin within the Rate Limiting count.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#requests_to_origin Ruleset#requests_to_origin}

---

###### `score_per_period`<sup>Optional</sup> <a name="score_per_period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.scorePerPeriod"></a>

- *Type:* typing.Union[int, float]

The maximum aggregate score over the period of time that will trigger Rate Limiting rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_per_period Ruleset#score_per_period}

---

###### `score_response_header_name`<sup>Optional</sup> <a name="score_response_header_name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.putRatelimit.parameter.scoreResponseHeaderName"></a>

- *Type:* str

Name of HTTP header in the response, set by the origin server, with the score for the current request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/cloudflare/r/ruleset#score_response_header_name Ruleset#score_response_header_name}

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_action_parameters` <a name="reset_action_parameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetActionParameters"></a>

```python
def reset_action_parameters() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_exposed_credential_check` <a name="reset_exposed_credential_check" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetExposedCredentialCheck"></a>

```python
def reset_exposed_credential_check() -> None
```

##### `reset_last_updated` <a name="reset_last_updated" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLastUpdated"></a>

```python
def reset_last_updated() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_ratelimit` <a name="reset_ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.resetRatelimit"></a>

```python
def reset_ratelimit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParameters">action_parameters</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference">RulesetRulesActionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheck">exposed_credential_check</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference">RulesetRulesExposedCredentialCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference">RulesetRulesLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimit">ratelimit</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference">RulesetRulesRatelimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParametersInput">action_parameters_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheckInput">exposed_credential_check_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdatedInput">last_updated_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimitInput">ratelimit_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_parameters`<sup>Required</sup> <a name="action_parameters" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParameters"></a>

```python
action_parameters: RulesetRulesActionParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParametersOutputReference">RulesetRulesActionParametersOutputReference</a>

---

##### `exposed_credential_check`<sup>Required</sup> <a name="exposed_credential_check" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheck"></a>

```python
exposed_credential_check: RulesetRulesExposedCredentialCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheckOutputReference">RulesetRulesExposedCredentialCheckOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.logging"></a>

```python
logging: RulesetRulesLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLoggingOutputReference">RulesetRulesLoggingOutputReference</a>

---

##### `ratelimit`<sup>Required</sup> <a name="ratelimit" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimit"></a>

```python
ratelimit: RulesetRulesRatelimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference">RulesetRulesRatelimitOutputReference</a>

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `action_parameters_input`<sup>Optional</sup> <a name="action_parameters_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.actionParametersInput"></a>

```python
action_parameters_input: RulesetRulesActionParameters
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesActionParameters">RulesetRulesActionParameters</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exposed_credential_check_input`<sup>Optional</sup> <a name="exposed_credential_check_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.exposedCredentialCheckInput"></a>

```python
exposed_credential_check_input: RulesetRulesExposedCredentialCheck
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesExposedCredentialCheck">RulesetRulesExposedCredentialCheck</a>

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `last_updated_input`<sup>Optional</sup> <a name="last_updated_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdatedInput"></a>

```python
last_updated_input: str
```

- *Type:* str

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.loggingInput"></a>

```python
logging_input: RulesetRulesLogging
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesLogging">RulesetRulesLogging</a>

---

##### `ratelimit_input`<sup>Optional</sup> <a name="ratelimit_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.ratelimitInput"></a>

```python
ratelimit_input: RulesetRulesRatelimit
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RulesetRules, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-cloudflare.ruleset.RulesetRules">RulesetRules</a>, cdktf.IResolvable]

---


### RulesetRulesRatelimitOutputReference <a name="RulesetRulesRatelimitOutputReference" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import ruleset

ruleset.RulesetRulesRatelimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCharacteristics">reset_characteristics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCountingExpression">reset_counting_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetMitigationTimeout">reset_mitigation_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsPerPeriod">reset_requests_per_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsToOrigin">reset_requests_to_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScorePerPeriod">reset_score_per_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScoreResponseHeaderName">reset_score_response_header_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_characteristics` <a name="reset_characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCharacteristics"></a>

```python
def reset_characteristics() -> None
```

##### `reset_counting_expression` <a name="reset_counting_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetCountingExpression"></a>

```python
def reset_counting_expression() -> None
```

##### `reset_mitigation_timeout` <a name="reset_mitigation_timeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetMitigationTimeout"></a>

```python
def reset_mitigation_timeout() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_requests_per_period` <a name="reset_requests_per_period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsPerPeriod"></a>

```python
def reset_requests_per_period() -> None
```

##### `reset_requests_to_origin` <a name="reset_requests_to_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetRequestsToOrigin"></a>

```python
def reset_requests_to_origin() -> None
```

##### `reset_score_per_period` <a name="reset_score_per_period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScorePerPeriod"></a>

```python
def reset_score_per_period() -> None
```

##### `reset_score_response_header_name` <a name="reset_score_response_header_name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.resetScoreResponseHeaderName"></a>

```python
def reset_score_response_header_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristicsInput">characteristics_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpressionInput">counting_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeoutInput">mitigation_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriodInput">requests_per_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOriginInput">requests_to_origin_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriodInput">score_per_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderNameInput">score_response_header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristics">characteristics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpression">counting_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeout">mitigation_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriod">requests_per_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOrigin">requests_to_origin</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriod">score_per_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName">score_response_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `characteristics_input`<sup>Optional</sup> <a name="characteristics_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristicsInput"></a>

```python
characteristics_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `counting_expression_input`<sup>Optional</sup> <a name="counting_expression_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpressionInput"></a>

```python
counting_expression_input: str
```

- *Type:* str

---

##### `mitigation_timeout_input`<sup>Optional</sup> <a name="mitigation_timeout_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeoutInput"></a>

```python
mitigation_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_per_period_input`<sup>Optional</sup> <a name="requests_per_period_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriodInput"></a>

```python
requests_per_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_to_origin_input`<sup>Optional</sup> <a name="requests_to_origin_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOriginInput"></a>

```python
requests_to_origin_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `score_per_period_input`<sup>Optional</sup> <a name="score_per_period_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriodInput"></a>

```python
score_per_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `score_response_header_name_input`<sup>Optional</sup> <a name="score_response_header_name_input" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderNameInput"></a>

```python
score_response_header_name_input: str
```

- *Type:* str

---

##### `characteristics`<sup>Required</sup> <a name="characteristics" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.characteristics"></a>

```python
characteristics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `counting_expression`<sup>Required</sup> <a name="counting_expression" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.countingExpression"></a>

```python
counting_expression: str
```

- *Type:* str

---

##### `mitigation_timeout`<sup>Required</sup> <a name="mitigation_timeout" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.mitigationTimeout"></a>

```python
mitigation_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_per_period`<sup>Required</sup> <a name="requests_per_period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsPerPeriod"></a>

```python
requests_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requests_to_origin`<sup>Required</sup> <a name="requests_to_origin" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.requestsToOrigin"></a>

```python
requests_to_origin: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `score_per_period`<sup>Required</sup> <a name="score_per_period" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scorePerPeriod"></a>

```python
score_per_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `score_response_header_name`<sup>Required</sup> <a name="score_response_header_name" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.scoreResponseHeaderName"></a>

```python
score_response_header_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimitOutputReference.property.internalValue"></a>

```python
internal_value: RulesetRulesRatelimit
```

- *Type:* <a href="#@cdktf/provider-cloudflare.ruleset.RulesetRulesRatelimit">RulesetRulesRatelimit</a>

---



