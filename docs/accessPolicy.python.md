# `cloudflare_access_policy`

Refer to the Terraform Registory for docs: [`cloudflare_access_policy`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy).

# `accessPolicy` Submodule <a name="`accessPolicy` Submodule" id="@cdktf/provider-cloudflare.accessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessPolicy <a name="AccessPolicy" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy cloudflare_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  decision: str,
  include: typing.Union[IResolvable, typing.List[AccessPolicyInclude]],
  name: str,
  precedence: typing.Union[int, float],
  account_id: str = None,
  approval_group: typing.Union[IResolvable, typing.List[AccessPolicyApprovalGroup]] = None,
  approval_required: typing.Union[bool, IResolvable] = None,
  exclude: typing.Union[IResolvable, typing.List[AccessPolicyExclude]] = None,
  id: str = None,
  isolation_required: typing.Union[bool, IResolvable] = None,
  purpose_justification_prompt: str = None,
  purpose_justification_required: typing.Union[bool, IResolvable] = None,
  require: typing.Union[IResolvable, typing.List[AccessPolicyRequire]] = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | The ID of the application the policy is associated with. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.decision">decision</a></code> | <code>str</code> | Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.include">include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]]</code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Friendly name of the Access Policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | The unique precedence for policies on a single application. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.approvalGroup">approval_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]]</code> | approval_group block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.exclude">exclude</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]]</code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#id AccessPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.isolationRequired">isolation_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require this application to be served in an isolated browser for users matching this policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.purposeJustificationPrompt">purpose_justification_prompt</a></code> | <code>str</code> | The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.purposeJustificationRequired">purpose_justification_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to prompt the user for a justification for accessing the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.require">require</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]]</code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.applicationId"></a>

- *Type:* str

The ID of the application the policy is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#application_id AccessPolicy#application_id}

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.decision"></a>

- *Type:* str

Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#decision AccessPolicy#decision}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.include"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]]

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#include AccessPolicy#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.name"></a>

- *Type:* str

Friendly name of the Access Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.precedence"></a>

- *Type:* typing.Union[int, float]

The unique precedence for policies on a single application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#precedence AccessPolicy#precedence}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.accountId"></a>

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#account_id AccessPolicy#account_id}

---

##### `approval_group`<sup>Optional</sup> <a name="approval_group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.approvalGroup"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]]

approval_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#approval_group AccessPolicy#approval_group}

---

##### `approval_required`<sup>Optional</sup> <a name="approval_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.approvalRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.exclude"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]]

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#exclude AccessPolicy#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#id AccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_required`<sup>Optional</sup> <a name="isolation_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.isolationRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require this application to be served in an isolated browser for users matching this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#isolation_required AccessPolicy#isolation_required}

---

##### `purpose_justification_prompt`<sup>Optional</sup> <a name="purpose_justification_prompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.purposeJustificationPrompt"></a>

- *Type:* str

The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#purpose_justification_prompt AccessPolicy#purpose_justification_prompt}

---

##### `purpose_justification_required`<sup>Optional</sup> <a name="purpose_justification_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.purposeJustificationRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to prompt the user for a justification for accessing the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#purpose_justification_required AccessPolicy#purpose_justification_required}

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.require"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]]

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#require AccessPolicy#require}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.Initializer.parameter.zoneId"></a>

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#zone_id AccessPolicy#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putApprovalGroup">put_approval_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putExclude">put_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putInclude">put_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putRequire">put_require</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalGroup">reset_approval_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalRequired">reset_approval_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetExclude">reset_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetIsolationRequired">reset_isolation_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationPrompt">reset_purpose_justification_prompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationRequired">reset_purpose_justification_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetRequire">reset_require</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_approval_group` <a name="put_approval_group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putApprovalGroup"></a>

```python
def put_approval_group(
  value: typing.Union[IResolvable, typing.List[AccessPolicyApprovalGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putApprovalGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]]

---

##### `put_exclude` <a name="put_exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putExclude"></a>

```python
def put_exclude(
  value: typing.Union[IResolvable, typing.List[AccessPolicyExclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putExclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]]

---

##### `put_include` <a name="put_include" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putInclude"></a>

```python
def put_include(
  value: typing.Union[IResolvable, typing.List[AccessPolicyInclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putInclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]]

---

##### `put_require` <a name="put_require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putRequire"></a>

```python
def put_require(
  value: typing.Union[IResolvable, typing.List[AccessPolicyRequire]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.putRequire.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_approval_group` <a name="reset_approval_group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalGroup"></a>

```python
def reset_approval_group() -> None
```

##### `reset_approval_required` <a name="reset_approval_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetApprovalRequired"></a>

```python
def reset_approval_required() -> None
```

##### `reset_exclude` <a name="reset_exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetExclude"></a>

```python
def reset_exclude() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_isolation_required` <a name="reset_isolation_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetIsolationRequired"></a>

```python
def reset_isolation_required() -> None
```

##### `reset_purpose_justification_prompt` <a name="reset_purpose_justification_prompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationPrompt"></a>

```python
def reset_purpose_justification_prompt() -> None
```

##### `reset_purpose_justification_required` <a name="reset_purpose_justification_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetPurposeJustificationRequired"></a>

```python
def reset_purpose_justification_required() -> None
```

##### `reset_require` <a name="reset_require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetRequire"></a>

```python
def reset_require() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroup">approval_group</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList">AccessPolicyApprovalGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.exclude">exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList">AccessPolicyExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.include">include</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList">AccessPolicyIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.require">require</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList">AccessPolicyRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroupInput">approval_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequiredInput">approval_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decisionInput">decision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.excludeInput">exclude_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.includeInput">include_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.isolationRequiredInput">isolation_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedenceInput">precedence_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPromptInput">purpose_justification_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequiredInput">purpose_justification_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.requireInput">require_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decision">decision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.isolationRequired">isolation_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPrompt">purpose_justification_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequired">purpose_justification_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `approval_group`<sup>Required</sup> <a name="approval_group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroup"></a>

```python
approval_group: AccessPolicyApprovalGroupList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList">AccessPolicyApprovalGroupList</a>

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.exclude"></a>

```python
exclude: AccessPolicyExcludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList">AccessPolicyExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.include"></a>

```python
include: AccessPolicyIncludeList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList">AccessPolicyIncludeList</a>

---

##### `require`<sup>Required</sup> <a name="require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.require"></a>

```python
require: AccessPolicyRequireList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList">AccessPolicyRequireList</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `approval_group_input`<sup>Optional</sup> <a name="approval_group_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalGroupInput"></a>

```python
approval_group_input: typing.Union[IResolvable, typing.List[AccessPolicyApprovalGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]]

---

##### `approval_required_input`<sup>Optional</sup> <a name="approval_required_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequiredInput"></a>

```python
approval_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `decision_input`<sup>Optional</sup> <a name="decision_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decisionInput"></a>

```python
decision_input: str
```

- *Type:* str

---

##### `exclude_input`<sup>Optional</sup> <a name="exclude_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.excludeInput"></a>

```python
exclude_input: typing.Union[IResolvable, typing.List[AccessPolicyExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_input`<sup>Optional</sup> <a name="include_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.includeInput"></a>

```python
include_input: typing.Union[IResolvable, typing.List[AccessPolicyInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]]

---

##### `isolation_required_input`<sup>Optional</sup> <a name="isolation_required_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.isolationRequiredInput"></a>

```python
isolation_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `precedence_input`<sup>Optional</sup> <a name="precedence_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedenceInput"></a>

```python
precedence_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `purpose_justification_prompt_input`<sup>Optional</sup> <a name="purpose_justification_prompt_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPromptInput"></a>

```python
purpose_justification_prompt_input: str
```

- *Type:* str

---

##### `purpose_justification_required_input`<sup>Optional</sup> <a name="purpose_justification_required_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequiredInput"></a>

```python
purpose_justification_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_input`<sup>Optional</sup> <a name="require_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.requireInput"></a>

```python
require_input: typing.Union[IResolvable, typing.List[AccessPolicyRequire]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `approval_required`<sup>Required</sup> <a name="approval_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.approvalRequired"></a>

```python
approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.decision"></a>

```python
decision: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `isolation_required`<sup>Required</sup> <a name="isolation_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.isolationRequired"></a>

```python
isolation_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `purpose_justification_prompt`<sup>Required</sup> <a name="purpose_justification_prompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationPrompt"></a>

```python
purpose_justification_prompt: str
```

- *Type:* str

---

##### `purpose_justification_required`<sup>Required</sup> <a name="purpose_justification_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.purposeJustificationRequired"></a>

```python
purpose_justification_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessPolicyApprovalGroup <a name="AccessPolicyApprovalGroup" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyApprovalGroup(
  approvals_needed: typing.Union[int, float],
  email_addresses: typing.List[str] = None,
  email_list_uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.approvalsNeeded">approvals_needed</a></code> | <code>typing.Union[int, float]</code> | Number of approvals needed. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | List of emails to request approval from. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailListUuid">email_list_uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email_list_uuid AccessPolicy#email_list_uuid}. |

---

##### `approvals_needed`<sup>Required</sup> <a name="approvals_needed" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.approvalsNeeded"></a>

```python
approvals_needed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of approvals needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#approvals_needed AccessPolicy#approvals_needed}

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

List of emails to request approval from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email_addresses AccessPolicy#email_addresses}

---

##### `email_list_uuid`<sup>Optional</sup> <a name="email_list_uuid" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup.property.emailListUuid"></a>

```python
email_list_uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email_list_uuid AccessPolicy#email_list_uuid}.

---

### AccessPolicyConfig <a name="AccessPolicyConfig" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  decision: str,
  include: typing.Union[IResolvable, typing.List[AccessPolicyInclude]],
  name: str,
  precedence: typing.Union[int, float],
  account_id: str = None,
  approval_group: typing.Union[IResolvable, typing.List[AccessPolicyApprovalGroup]] = None,
  approval_required: typing.Union[bool, IResolvable] = None,
  exclude: typing.Union[IResolvable, typing.List[AccessPolicyExclude]] = None,
  id: str = None,
  isolation_required: typing.Union[bool, IResolvable] = None,
  purpose_justification_prompt: str = None,
  purpose_justification_required: typing.Union[bool, IResolvable] = None,
  require: typing.Union[IResolvable, typing.List[AccessPolicyRequire]] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.applicationId">application_id</a></code> | <code>str</code> | The ID of the application the policy is associated with. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.decision">decision</a></code> | <code>str</code> | Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.include">include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]]</code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.name">name</a></code> | <code>str</code> | Friendly name of the Access Policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.precedence">precedence</a></code> | <code>typing.Union[int, float]</code> | The unique precedence for policies on a single application. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.accountId">account_id</a></code> | <code>str</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalGroup">approval_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]]</code> | approval_group block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalRequired">approval_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.exclude">exclude</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]]</code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#id AccessPolicy#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.isolationRequired">isolation_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Require this application to be served in an isolated browser for users matching this policy. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationPrompt">purpose_justification_prompt</a></code> | <code>str</code> | The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationRequired">purpose_justification_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to prompt the user for a justification for accessing the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.require">require</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]]</code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.zoneId">zone_id</a></code> | <code>str</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

The ID of the application the policy is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#application_id AccessPolicy#application_id}

---

##### `decision`<sup>Required</sup> <a name="decision" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.decision"></a>

```python
decision: str
```

- *Type:* str

Defines the action Access will take if the policy matches the user. Available values: `allow`, `deny`, `non_identity`, `bypass`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#decision AccessPolicy#decision}

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.include"></a>

```python
include: typing.Union[IResolvable, typing.List[AccessPolicyInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]]

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#include AccessPolicy#include}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Friendly name of the Access Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.precedence"></a>

```python
precedence: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The unique precedence for policies on a single application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#precedence AccessPolicy#precedence}

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#account_id AccessPolicy#account_id}

---

##### `approval_group`<sup>Optional</sup> <a name="approval_group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalGroup"></a>

```python
approval_group: typing.Union[IResolvable, typing.List[AccessPolicyApprovalGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]]

approval_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#approval_group AccessPolicy#approval_group}

---

##### `approval_required`<sup>Optional</sup> <a name="approval_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.approvalRequired"></a>

```python
approval_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#approval_required AccessPolicy#approval_required}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.exclude"></a>

```python
exclude: typing.Union[IResolvable, typing.List[AccessPolicyExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]]

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#exclude AccessPolicy#exclude}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#id AccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_required`<sup>Optional</sup> <a name="isolation_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.isolationRequired"></a>

```python
isolation_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Require this application to be served in an isolated browser for users matching this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#isolation_required AccessPolicy#isolation_required}

---

##### `purpose_justification_prompt`<sup>Optional</sup> <a name="purpose_justification_prompt" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationPrompt"></a>

```python
purpose_justification_prompt: str
```

- *Type:* str

The prompt to display to the user for a justification for accessing the resource. Required when using `purpose_justification_required`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#purpose_justification_prompt AccessPolicy#purpose_justification_prompt}

---

##### `purpose_justification_required`<sup>Optional</sup> <a name="purpose_justification_required" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.purposeJustificationRequired"></a>

```python
purpose_justification_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to prompt the user for a justification for accessing the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#purpose_justification_required AccessPolicy#purpose_justification_required}

---

##### `require`<sup>Optional</sup> <a name="require" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.require"></a>

```python
require: typing.Union[IResolvable, typing.List[AccessPolicyRequire]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]]

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#require AccessPolicy#require}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#zone_id AccessPolicy#zone_id}

---

### AccessPolicyExclude <a name="AccessPolicyExclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExclude(
  any_valid_service_token: typing.Union[bool, IResolvable] = None,
  auth_method: str = None,
  azure: typing.Union[IResolvable, typing.List[AccessPolicyExcludeAzure]] = None,
  certificate: typing.Union[bool, IResolvable] = None,
  common_name: str = None,
  device_posture: typing.List[str] = None,
  email: typing.List[str] = None,
  email_domain: typing.List[str] = None,
  everyone: typing.Union[bool, IResolvable] = None,
  external_evaluation: AccessPolicyExcludeExternalEvaluation = None,
  geo: typing.List[str] = None,
  github: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGithub]] = None,
  group: typing.List[str] = None,
  gsuite: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGsuite]] = None,
  ip: typing.List[str] = None,
  ip_list: typing.List[str] = None,
  login_method: typing.List[str] = None,
  okta: typing.Union[IResolvable, typing.List[AccessPolicyExcludeOkta]] = None,
  saml: typing.Union[IResolvable, typing.List[AccessPolicyExcludeSaml]] = None,
  service_token: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.authMethod">auth_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.azure">azure</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>]]</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#certificate AccessPolicy#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#common_name AccessPolicy#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#everyone AccessPolicy#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.externalEvaluation">external_evaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.geo">geo</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#geo AccessPolicy#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.github">github</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>]]</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.group">group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#group AccessPolicy#group}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.gsuite">gsuite</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>]]</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ip">ip</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip AccessPolicy#ip}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#login_method AccessPolicy#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.okta">okta</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>]]</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.saml">saml</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>]]</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#service_token AccessPolicy#service_token}. |

---

##### `any_valid_service_token`<sup>Optional</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}.

---

##### `auth_method`<sup>Optional</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}.

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.azure"></a>

```python
azure: typing.Union[IResolvable, typing.List[AccessPolicyExcludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>]]

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#azure AccessPolicy#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#certificate AccessPolicy#certificate}.

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#common_name AccessPolicy#common_name}.

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `email_domain`<sup>Optional</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}.

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#everyone AccessPolicy#everyone}.

---

##### `external_evaluation`<sup>Optional</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.externalEvaluation"></a>

```python
external_evaluation: AccessPolicyExcludeExternalEvaluation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#geo AccessPolicy#geo}.

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.github"></a>

```python
github: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>]]

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#github AccessPolicy#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#group AccessPolicy#group}.

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.gsuite"></a>

```python
gsuite: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>]]

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip AccessPolicy#ip}.

---

##### `ip_list`<sup>Optional</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}.

---

##### `login_method`<sup>Optional</sup> <a name="login_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#login_method AccessPolicy#login_method}.

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.okta"></a>

```python
okta: typing.Union[IResolvable, typing.List[AccessPolicyExcludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>]]

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#okta AccessPolicy#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.saml"></a>

```python
saml: typing.Union[IResolvable, typing.List[AccessPolicyExcludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>]]

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#saml AccessPolicy#saml}

---

##### `service_token`<sup>Optional</sup> <a name="service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#service_token AccessPolicy#service_token}.

---

### AccessPolicyExcludeAzure <a name="AccessPolicyExcludeAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeAzure(
  id: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.id">id</a></code> | <code>typing.List[str]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | The ID of the Azure Identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyExcludeExternalEvaluation <a name="AccessPolicyExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeExternalEvaluation(
  evaluate_url: str = None,
  keys_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.keysUrl">keys_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}. |

---

##### `evaluate_url`<sup>Optional</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}.

---

##### `keys_url`<sup>Optional</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}.

---

### AccessPolicyExcludeGithub <a name="AccessPolicyExcludeGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeGithub(
  identity_provider_id: str = None,
  name: str = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#teams AccessPolicy#teams}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#teams AccessPolicy#teams}.

---

### AccessPolicyExcludeGsuite <a name="AccessPolicyExcludeGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeGsuite(
  email: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyExcludeOkta <a name="AccessPolicyExcludeOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeOkta(
  identity_provider_id: str = None,
  name: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}.

---

### AccessPolicyExcludeSaml <a name="AccessPolicyExcludeSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeSaml(
  attribute_name: str = None,
  attribute_value: str = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}.

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyInclude <a name="AccessPolicyInclude" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyInclude(
  any_valid_service_token: typing.Union[bool, IResolvable] = None,
  auth_method: str = None,
  azure: typing.Union[IResolvable, typing.List[AccessPolicyIncludeAzure]] = None,
  certificate: typing.Union[bool, IResolvable] = None,
  common_name: str = None,
  device_posture: typing.List[str] = None,
  email: typing.List[str] = None,
  email_domain: typing.List[str] = None,
  everyone: typing.Union[bool, IResolvable] = None,
  external_evaluation: AccessPolicyIncludeExternalEvaluation = None,
  geo: typing.List[str] = None,
  github: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGithub]] = None,
  group: typing.List[str] = None,
  gsuite: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGsuite]] = None,
  ip: typing.List[str] = None,
  ip_list: typing.List[str] = None,
  login_method: typing.List[str] = None,
  okta: typing.Union[IResolvable, typing.List[AccessPolicyIncludeOkta]] = None,
  saml: typing.Union[IResolvable, typing.List[AccessPolicyIncludeSaml]] = None,
  service_token: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.authMethod">auth_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.azure">azure</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>]]</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#certificate AccessPolicy#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#common_name AccessPolicy#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#everyone AccessPolicy#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.externalEvaluation">external_evaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.geo">geo</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#geo AccessPolicy#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.github">github</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>]]</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.group">group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#group AccessPolicy#group}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.gsuite">gsuite</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>]]</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ip">ip</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip AccessPolicy#ip}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#login_method AccessPolicy#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.okta">okta</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>]]</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.saml">saml</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>]]</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#service_token AccessPolicy#service_token}. |

---

##### `any_valid_service_token`<sup>Optional</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}.

---

##### `auth_method`<sup>Optional</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}.

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.azure"></a>

```python
azure: typing.Union[IResolvable, typing.List[AccessPolicyIncludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>]]

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#azure AccessPolicy#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#certificate AccessPolicy#certificate}.

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#common_name AccessPolicy#common_name}.

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `email_domain`<sup>Optional</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}.

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#everyone AccessPolicy#everyone}.

---

##### `external_evaluation`<sup>Optional</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.externalEvaluation"></a>

```python
external_evaluation: AccessPolicyIncludeExternalEvaluation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#geo AccessPolicy#geo}.

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.github"></a>

```python
github: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>]]

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#github AccessPolicy#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#group AccessPolicy#group}.

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.gsuite"></a>

```python
gsuite: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>]]

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip AccessPolicy#ip}.

---

##### `ip_list`<sup>Optional</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}.

---

##### `login_method`<sup>Optional</sup> <a name="login_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#login_method AccessPolicy#login_method}.

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.okta"></a>

```python
okta: typing.Union[IResolvable, typing.List[AccessPolicyIncludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>]]

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#okta AccessPolicy#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.saml"></a>

```python
saml: typing.Union[IResolvable, typing.List[AccessPolicyIncludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>]]

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#saml AccessPolicy#saml}

---

##### `service_token`<sup>Optional</sup> <a name="service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#service_token AccessPolicy#service_token}.

---

### AccessPolicyIncludeAzure <a name="AccessPolicyIncludeAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeAzure(
  id: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.id">id</a></code> | <code>typing.List[str]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | The ID of the Azure Identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyIncludeExternalEvaluation <a name="AccessPolicyIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeExternalEvaluation(
  evaluate_url: str = None,
  keys_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.keysUrl">keys_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}. |

---

##### `evaluate_url`<sup>Optional</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}.

---

##### `keys_url`<sup>Optional</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}.

---

### AccessPolicyIncludeGithub <a name="AccessPolicyIncludeGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeGithub(
  identity_provider_id: str = None,
  name: str = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#teams AccessPolicy#teams}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#teams AccessPolicy#teams}.

---

### AccessPolicyIncludeGsuite <a name="AccessPolicyIncludeGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeGsuite(
  email: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyIncludeOkta <a name="AccessPolicyIncludeOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeOkta(
  identity_provider_id: str = None,
  name: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}.

---

### AccessPolicyIncludeSaml <a name="AccessPolicyIncludeSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeSaml(
  attribute_name: str = None,
  attribute_value: str = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}.

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyRequire <a name="AccessPolicyRequire" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequire(
  any_valid_service_token: typing.Union[bool, IResolvable] = None,
  auth_method: str = None,
  azure: typing.Union[IResolvable, typing.List[AccessPolicyRequireAzure]] = None,
  certificate: typing.Union[bool, IResolvable] = None,
  common_name: str = None,
  device_posture: typing.List[str] = None,
  email: typing.List[str] = None,
  email_domain: typing.List[str] = None,
  everyone: typing.Union[bool, IResolvable] = None,
  external_evaluation: AccessPolicyRequireExternalEvaluation = None,
  geo: typing.List[str] = None,
  github: typing.Union[IResolvable, typing.List[AccessPolicyRequireGithub]] = None,
  group: typing.List[str] = None,
  gsuite: typing.Union[IResolvable, typing.List[AccessPolicyRequireGsuite]] = None,
  ip: typing.List[str] = None,
  ip_list: typing.List[str] = None,
  login_method: typing.List[str] = None,
  okta: typing.Union[IResolvable, typing.List[AccessPolicyRequireOkta]] = None,
  saml: typing.Union[IResolvable, typing.List[AccessPolicyRequireSaml]] = None,
  service_token: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.authMethod">auth_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.azure">azure</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>]]</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#certificate AccessPolicy#certificate}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.commonName">common_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#common_name AccessPolicy#common_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#everyone AccessPolicy#everyone}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.externalEvaluation">external_evaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a></code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.geo">geo</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#geo AccessPolicy#geo}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.github">github</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>]]</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.group">group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#group AccessPolicy#group}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.gsuite">gsuite</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>]]</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ip">ip</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip AccessPolicy#ip}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#login_method AccessPolicy#login_method}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.okta">okta</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>]]</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.saml">saml</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>]]</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#service_token AccessPolicy#service_token}. |

---

##### `any_valid_service_token`<sup>Optional</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#any_valid_service_token AccessPolicy#any_valid_service_token}.

---

##### `auth_method`<sup>Optional</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#auth_method AccessPolicy#auth_method}.

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.azure"></a>

```python
azure: typing.Union[IResolvable, typing.List[AccessPolicyRequireAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>]]

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#azure AccessPolicy#azure}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#certificate AccessPolicy#certificate}.

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#common_name AccessPolicy#common_name}.

---

##### `device_posture`<sup>Optional</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#device_posture AccessPolicy#device_posture}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `email_domain`<sup>Optional</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email_domain AccessPolicy#email_domain}.

---

##### `everyone`<sup>Optional</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#everyone AccessPolicy#everyone}.

---

##### `external_evaluation`<sup>Optional</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.externalEvaluation"></a>

```python
external_evaluation: AccessPolicyRequireExternalEvaluation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#external_evaluation AccessPolicy#external_evaluation}

---

##### `geo`<sup>Optional</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#geo AccessPolicy#geo}.

---

##### `github`<sup>Optional</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.github"></a>

```python
github: typing.Union[IResolvable, typing.List[AccessPolicyRequireGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>]]

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#github AccessPolicy#github}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#group AccessPolicy#group}.

---

##### `gsuite`<sup>Optional</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.gsuite"></a>

```python
gsuite: typing.Union[IResolvable, typing.List[AccessPolicyRequireGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>]]

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#gsuite AccessPolicy#gsuite}

---

##### `ip`<sup>Optional</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip AccessPolicy#ip}.

---

##### `ip_list`<sup>Optional</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#ip_list AccessPolicy#ip_list}.

---

##### `login_method`<sup>Optional</sup> <a name="login_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#login_method AccessPolicy#login_method}.

---

##### `okta`<sup>Optional</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.okta"></a>

```python
okta: typing.Union[IResolvable, typing.List[AccessPolicyRequireOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>]]

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#okta AccessPolicy#okta}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.saml"></a>

```python
saml: typing.Union[IResolvable, typing.List[AccessPolicyRequireSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>]]

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#saml AccessPolicy#saml}

---

##### `service_token`<sup>Optional</sup> <a name="service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#service_token AccessPolicy#service_token}.

---

### AccessPolicyRequireAzure <a name="AccessPolicyRequireAzure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireAzure(
  id: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.id">id</a></code> | <code>typing.List[str]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | The ID of the Azure Identity provider. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#id AccessPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

The ID of the Azure Identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}

---

### AccessPolicyRequireExternalEvaluation <a name="AccessPolicyRequireExternalEvaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireExternalEvaluation(
  evaluate_url: str = None,
  keys_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.keysUrl">keys_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}. |

---

##### `evaluate_url`<sup>Optional</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}.

---

##### `keys_url`<sup>Optional</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}.

---

### AccessPolicyRequireGithub <a name="AccessPolicyRequireGithub" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireGithub(
  identity_provider_id: str = None,
  name: str = None,
  teams: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.teams">teams</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#teams AccessPolicy#teams}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}.

---

##### `teams`<sup>Optional</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#teams AccessPolicy#teams}.

---

### AccessPolicyRequireGsuite <a name="AccessPolicyRequireGsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireGsuite(
  email: typing.List[str] = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.email">email</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#email AccessPolicy#email}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

### AccessPolicyRequireOkta <a name="AccessPolicyRequireOkta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireOkta(
  identity_provider_id: str = None,
  name: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.name">name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}. |

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#name AccessPolicy#name}.

---

### AccessPolicyRequireSaml <a name="AccessPolicyRequireSaml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireSaml(
  attribute_name: str = None,
  attribute_value: str = None,
  identity_provider_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeName">attribute_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeValue">attribute_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}. |

---

##### `attribute_name`<sup>Optional</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_name AccessPolicy#attribute_name}.

---

##### `attribute_value`<sup>Optional</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#attribute_value AccessPolicy#attribute_value}.

---

##### `identity_provider_id`<sup>Optional</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#identity_provider_id AccessPolicy#identity_provider_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessPolicyApprovalGroupList <a name="AccessPolicyApprovalGroupList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyApprovalGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyApprovalGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyApprovalGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]]

---


### AccessPolicyApprovalGroupOutputReference <a name="AccessPolicyApprovalGroupOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyApprovalGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailListUuid">reset_email_list_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```

##### `reset_email_list_uuid` <a name="reset_email_list_uuid" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.resetEmailListUuid"></a>

```python
def reset_email_list_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput">approvals_needed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuidInput">email_list_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeeded">approvals_needed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuid">email_list_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approvals_needed_input`<sup>Optional</sup> <a name="approvals_needed_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeededInput"></a>

```python
approvals_needed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_list_uuid_input`<sup>Optional</sup> <a name="email_list_uuid_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuidInput"></a>

```python
email_list_uuid_input: str
```

- *Type:* str

---

##### `approvals_needed`<sup>Required</sup> <a name="approvals_needed" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.approvalsNeeded"></a>

```python
approvals_needed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_list_uuid`<sup>Required</sup> <a name="email_list_uuid" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.emailListUuid"></a>

```python
email_list_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyApprovalGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyApprovalGroup">AccessPolicyApprovalGroup</a>]

---


### AccessPolicyExcludeAzureList <a name="AccessPolicyExcludeAzureList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeAzureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyExcludeAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>]]

---


### AccessPolicyExcludeAzureOutputReference <a name="AccessPolicyExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.idInput">id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.id">id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.idInput"></a>

```python
id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyExcludeAzure]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>]

---


### AccessPolicyExcludeExternalEvaluationOutputReference <a name="AccessPolicyExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl">reset_evaluate_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl">reset_keys_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluate_url` <a name="reset_evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```python
def reset_evaluate_url() -> None
```

##### `reset_keys_url` <a name="reset_keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```python
def reset_keys_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput">keys_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl">keys_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate_url_input`<sup>Optional</sup> <a name="evaluate_url_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```python
evaluate_url_input: str
```

- *Type:* str

---

##### `keys_url_input`<sup>Optional</sup> <a name="keys_url_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```python
keys_url_input: str
```

- *Type:* str

---

##### `evaluate_url`<sup>Required</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

---

##### `keys_url`<sup>Required</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: AccessPolicyExcludeExternalEvaluation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>

---


### AccessPolicyExcludeGithubList <a name="AccessPolicyExcludeGithubList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeGithubList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyExcludeGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>]]

---


### AccessPolicyExcludeGithubOutputReference <a name="AccessPolicyExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyExcludeGithub]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>]

---


### AccessPolicyExcludeGsuiteList <a name="AccessPolicyExcludeGsuiteList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeGsuiteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyExcludeGsuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>]]

---


### AccessPolicyExcludeGsuiteOutputReference <a name="AccessPolicyExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeGsuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyExcludeGsuite]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>]

---


### AccessPolicyExcludeList <a name="AccessPolicyExcludeList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]]

---


### AccessPolicyExcludeOktaList <a name="AccessPolicyExcludeOktaList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeOktaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyExcludeOktaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>]]

---


### AccessPolicyExcludeOktaOutputReference <a name="AccessPolicyExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeOktaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyExcludeOkta]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>]

---


### AccessPolicyExcludeOutputReference <a name="AccessPolicyExcludeOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation">put_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGsuite">put_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putOkta">put_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putSaml">put_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAnyValidServiceToken">reset_any_valid_service_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAuthMethod">reset_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetDevicePosture">reset_device_posture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmailDomain">reset_email_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEveryone">reset_everyone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetExternalEvaluation">reset_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGsuite">reset_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIpList">reset_ip_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetLoginMethod">reset_login_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetOkta">reset_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetSaml">reset_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetServiceToken">reset_service_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure` <a name="put_azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAzure"></a>

```python
def put_azure(
  value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeAzure]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>]]

---

##### `put_external_evaluation` <a name="put_external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation"></a>

```python
def put_external_evaluation(
  evaluate_url: str = None,
  keys_url: str = None
) -> None
```

###### `evaluate_url`<sup>Optional</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation.parameter.evaluateUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}.

---

###### `keys_url`<sup>Optional</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putExternalEvaluation.parameter.keysUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}.

---

##### `put_github` <a name="put_github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGithub"></a>

```python
def put_github(
  value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGithub]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>]]

---

##### `put_gsuite` <a name="put_gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGsuite"></a>

```python
def put_gsuite(
  value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGsuite]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>]]

---

##### `put_okta` <a name="put_okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putOkta"></a>

```python
def put_okta(
  value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeOkta]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>]]

---

##### `put_saml` <a name="put_saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putSaml"></a>

```python
def put_saml(
  value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeSaml]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>]]

---

##### `reset_any_valid_service_token` <a name="reset_any_valid_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAnyValidServiceToken"></a>

```python
def reset_any_valid_service_token() -> None
```

##### `reset_auth_method` <a name="reset_auth_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAuthMethod"></a>

```python
def reset_auth_method() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_device_posture` <a name="reset_device_posture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetDevicePosture"></a>

```python
def reset_device_posture() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_email_domain` <a name="reset_email_domain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEmailDomain"></a>

```python
def reset_email_domain() -> None
```

##### `reset_everyone` <a name="reset_everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetEveryone"></a>

```python
def reset_everyone() -> None
```

##### `reset_external_evaluation` <a name="reset_external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetExternalEvaluation"></a>

```python
def reset_external_evaluation() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_github` <a name="reset_github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_gsuite` <a name="reset_gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetGsuite"></a>

```python
def reset_gsuite() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ip_list` <a name="reset_ip_list" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetIpList"></a>

```python
def reset_ip_list() -> None
```

##### `reset_login_method` <a name="reset_login_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetLoginMethod"></a>

```python
def reset_login_method() -> None
```

##### `reset_okta` <a name="reset_okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetOkta"></a>

```python
def reset_okta() -> None
```

##### `reset_saml` <a name="reset_saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetSaml"></a>

```python
def reset_saml() -> None
```

##### `reset_service_token` <a name="reset_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.resetServiceToken"></a>

```python
def reset_service_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList">AccessPolicyExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluation">external_evaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference">AccessPolicyExcludeExternalEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList">AccessPolicyExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList">AccessPolicyExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList">AccessPolicyExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList">AccessPolicyExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput">any_valid_service_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethodInput">auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azureInput">azure_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePostureInput">device_posture_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomainInput">email_domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyoneInput">everyone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluationInput">external_evaluation_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geoInput">geo_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.githubInput">github_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.groupInput">group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuiteInput">gsuite_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipInput">ip_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipListInput">ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethodInput">login_method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.oktaInput">okta_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.samlInput">saml_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceTokenInput">service_token_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethod">auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geo">geo</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.group">group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ip">ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azure"></a>

```python
azure: AccessPolicyExcludeAzureList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzureList">AccessPolicyExcludeAzureList</a>

---

##### `external_evaluation`<sup>Required</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluation"></a>

```python
external_evaluation: AccessPolicyExcludeExternalEvaluationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluationOutputReference">AccessPolicyExcludeExternalEvaluationOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.github"></a>

```python
github: AccessPolicyExcludeGithubList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithubList">AccessPolicyExcludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuite"></a>

```python
gsuite: AccessPolicyExcludeGsuiteList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuiteList">AccessPolicyExcludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.okta"></a>

```python
okta: AccessPolicyExcludeOktaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOktaList">AccessPolicyExcludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.saml"></a>

```python
saml: AccessPolicyExcludeSamlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList">AccessPolicyExcludeSamlList</a>

---

##### `any_valid_service_token_input`<sup>Optional</sup> <a name="any_valid_service_token_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```python
any_valid_service_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_method_input`<sup>Optional</sup> <a name="auth_method_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethodInput"></a>

```python
auth_method_input: str
```

- *Type:* str

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.azureInput"></a>

```python
azure_input: typing.Union[IResolvable, typing.List[AccessPolicyExcludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeAzure">AccessPolicyExcludeAzure</a>]]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `device_posture_input`<sup>Optional</sup> <a name="device_posture_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePostureInput"></a>

```python
device_posture_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain_input`<sup>Optional</sup> <a name="email_domain_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomainInput"></a>

```python
email_domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone_input`<sup>Optional</sup> <a name="everyone_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyoneInput"></a>

```python
everyone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_evaluation_input`<sup>Optional</sup> <a name="external_evaluation_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.externalEvaluationInput"></a>

```python
external_evaluation_input: AccessPolicyExcludeExternalEvaluation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeExternalEvaluation">AccessPolicyExcludeExternalEvaluation</a>

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geoInput"></a>

```python
geo_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.githubInput"></a>

```python
github_input: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGithub">AccessPolicyExcludeGithub</a>]]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.groupInput"></a>

```python
group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gsuite_input`<sup>Optional</sup> <a name="gsuite_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.gsuiteInput"></a>

```python
gsuite_input: typing.Union[IResolvable, typing.List[AccessPolicyExcludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeGsuite">AccessPolicyExcludeGsuite</a>]]

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipInput"></a>

```python
ip_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list_input`<sup>Optional</sup> <a name="ip_list_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipListInput"></a>

```python
ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method_input`<sup>Optional</sup> <a name="login_method_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethodInput"></a>

```python
login_method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `okta_input`<sup>Optional</sup> <a name="okta_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.oktaInput"></a>

```python
okta_input: typing.Union[IResolvable, typing.List[AccessPolicyExcludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOkta">AccessPolicyExcludeOkta</a>]]

---

##### `saml_input`<sup>Optional</sup> <a name="saml_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.samlInput"></a>

```python
saml_input: typing.Union[IResolvable, typing.List[AccessPolicyExcludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>]]

---

##### `service_token_input`<sup>Optional</sup> <a name="service_token_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceTokenInput"></a>

```python
service_token_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_valid_service_token`<sup>Required</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `device_posture`<sup>Required</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain`<sup>Required</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method`<sup>Required</sup> <a name="login_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyExclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExclude">AccessPolicyExclude</a>]

---


### AccessPolicyExcludeSamlList <a name="AccessPolicyExcludeSamlList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeSamlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyExcludeSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyExcludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>]]

---


### AccessPolicyExcludeSamlOutputReference <a name="AccessPolicyExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyExcludeSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSamlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyExcludeSaml]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyExcludeSaml">AccessPolicyExcludeSaml</a>]

---


### AccessPolicyIncludeAzureList <a name="AccessPolicyIncludeAzureList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeAzureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyIncludeAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>]]

---


### AccessPolicyIncludeAzureOutputReference <a name="AccessPolicyIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.idInput">id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.id">id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.idInput"></a>

```python
id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyIncludeAzure]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>]

---


### AccessPolicyIncludeExternalEvaluationOutputReference <a name="AccessPolicyIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl">reset_evaluate_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl">reset_keys_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluate_url` <a name="reset_evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```python
def reset_evaluate_url() -> None
```

##### `reset_keys_url` <a name="reset_keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```python
def reset_keys_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">evaluate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput">keys_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl">keys_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate_url_input`<sup>Optional</sup> <a name="evaluate_url_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```python
evaluate_url_input: str
```

- *Type:* str

---

##### `keys_url_input`<sup>Optional</sup> <a name="keys_url_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```python
keys_url_input: str
```

- *Type:* str

---

##### `evaluate_url`<sup>Required</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

---

##### `keys_url`<sup>Required</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: AccessPolicyIncludeExternalEvaluation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>

---


### AccessPolicyIncludeGithubList <a name="AccessPolicyIncludeGithubList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeGithubList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyIncludeGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>]]

---


### AccessPolicyIncludeGithubOutputReference <a name="AccessPolicyIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyIncludeGithub]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>]

---


### AccessPolicyIncludeGsuiteList <a name="AccessPolicyIncludeGsuiteList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeGsuiteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyIncludeGsuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>]]

---


### AccessPolicyIncludeGsuiteOutputReference <a name="AccessPolicyIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeGsuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyIncludeGsuite]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>]

---


### AccessPolicyIncludeList <a name="AccessPolicyIncludeList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]]

---


### AccessPolicyIncludeOktaList <a name="AccessPolicyIncludeOktaList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeOktaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyIncludeOktaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>]]

---


### AccessPolicyIncludeOktaOutputReference <a name="AccessPolicyIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeOktaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyIncludeOkta]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>]

---


### AccessPolicyIncludeOutputReference <a name="AccessPolicyIncludeOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation">put_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGsuite">put_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putOkta">put_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putSaml">put_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAnyValidServiceToken">reset_any_valid_service_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAuthMethod">reset_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetDevicePosture">reset_device_posture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmailDomain">reset_email_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEveryone">reset_everyone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetExternalEvaluation">reset_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGsuite">reset_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIpList">reset_ip_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetLoginMethod">reset_login_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetOkta">reset_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetSaml">reset_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetServiceToken">reset_service_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure` <a name="put_azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAzure"></a>

```python
def put_azure(
  value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeAzure]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>]]

---

##### `put_external_evaluation` <a name="put_external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation"></a>

```python
def put_external_evaluation(
  evaluate_url: str = None,
  keys_url: str = None
) -> None
```

###### `evaluate_url`<sup>Optional</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation.parameter.evaluateUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}.

---

###### `keys_url`<sup>Optional</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putExternalEvaluation.parameter.keysUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}.

---

##### `put_github` <a name="put_github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGithub"></a>

```python
def put_github(
  value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGithub]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>]]

---

##### `put_gsuite` <a name="put_gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGsuite"></a>

```python
def put_gsuite(
  value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGsuite]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>]]

---

##### `put_okta` <a name="put_okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putOkta"></a>

```python
def put_okta(
  value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeOkta]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>]]

---

##### `put_saml` <a name="put_saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putSaml"></a>

```python
def put_saml(
  value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeSaml]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>]]

---

##### `reset_any_valid_service_token` <a name="reset_any_valid_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAnyValidServiceToken"></a>

```python
def reset_any_valid_service_token() -> None
```

##### `reset_auth_method` <a name="reset_auth_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAuthMethod"></a>

```python
def reset_auth_method() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_device_posture` <a name="reset_device_posture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetDevicePosture"></a>

```python
def reset_device_posture() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_email_domain` <a name="reset_email_domain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEmailDomain"></a>

```python
def reset_email_domain() -> None
```

##### `reset_everyone` <a name="reset_everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetEveryone"></a>

```python
def reset_everyone() -> None
```

##### `reset_external_evaluation` <a name="reset_external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetExternalEvaluation"></a>

```python
def reset_external_evaluation() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_github` <a name="reset_github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_gsuite` <a name="reset_gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetGsuite"></a>

```python
def reset_gsuite() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ip_list` <a name="reset_ip_list" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetIpList"></a>

```python
def reset_ip_list() -> None
```

##### `reset_login_method` <a name="reset_login_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetLoginMethod"></a>

```python
def reset_login_method() -> None
```

##### `reset_okta` <a name="reset_okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetOkta"></a>

```python
def reset_okta() -> None
```

##### `reset_saml` <a name="reset_saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetSaml"></a>

```python
def reset_saml() -> None
```

##### `reset_service_token` <a name="reset_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.resetServiceToken"></a>

```python
def reset_service_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList">AccessPolicyIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluation">external_evaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference">AccessPolicyIncludeExternalEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList">AccessPolicyIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList">AccessPolicyIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList">AccessPolicyIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList">AccessPolicyIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput">any_valid_service_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethodInput">auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azureInput">azure_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePostureInput">device_posture_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomainInput">email_domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyoneInput">everyone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluationInput">external_evaluation_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geoInput">geo_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.githubInput">github_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.groupInput">group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuiteInput">gsuite_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipInput">ip_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipListInput">ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethodInput">login_method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.oktaInput">okta_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.samlInput">saml_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceTokenInput">service_token_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethod">auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geo">geo</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.group">group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ip">ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azure"></a>

```python
azure: AccessPolicyIncludeAzureList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzureList">AccessPolicyIncludeAzureList</a>

---

##### `external_evaluation`<sup>Required</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluation"></a>

```python
external_evaluation: AccessPolicyIncludeExternalEvaluationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluationOutputReference">AccessPolicyIncludeExternalEvaluationOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.github"></a>

```python
github: AccessPolicyIncludeGithubList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithubList">AccessPolicyIncludeGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuite"></a>

```python
gsuite: AccessPolicyIncludeGsuiteList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuiteList">AccessPolicyIncludeGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.okta"></a>

```python
okta: AccessPolicyIncludeOktaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOktaList">AccessPolicyIncludeOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.saml"></a>

```python
saml: AccessPolicyIncludeSamlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList">AccessPolicyIncludeSamlList</a>

---

##### `any_valid_service_token_input`<sup>Optional</sup> <a name="any_valid_service_token_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```python
any_valid_service_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_method_input`<sup>Optional</sup> <a name="auth_method_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethodInput"></a>

```python
auth_method_input: str
```

- *Type:* str

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.azureInput"></a>

```python
azure_input: typing.Union[IResolvable, typing.List[AccessPolicyIncludeAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeAzure">AccessPolicyIncludeAzure</a>]]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `device_posture_input`<sup>Optional</sup> <a name="device_posture_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePostureInput"></a>

```python
device_posture_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain_input`<sup>Optional</sup> <a name="email_domain_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomainInput"></a>

```python
email_domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone_input`<sup>Optional</sup> <a name="everyone_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyoneInput"></a>

```python
everyone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_evaluation_input`<sup>Optional</sup> <a name="external_evaluation_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.externalEvaluationInput"></a>

```python
external_evaluation_input: AccessPolicyIncludeExternalEvaluation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeExternalEvaluation">AccessPolicyIncludeExternalEvaluation</a>

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geoInput"></a>

```python
geo_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.githubInput"></a>

```python
github_input: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGithub">AccessPolicyIncludeGithub</a>]]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.groupInput"></a>

```python
group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gsuite_input`<sup>Optional</sup> <a name="gsuite_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.gsuiteInput"></a>

```python
gsuite_input: typing.Union[IResolvable, typing.List[AccessPolicyIncludeGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeGsuite">AccessPolicyIncludeGsuite</a>]]

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipInput"></a>

```python
ip_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list_input`<sup>Optional</sup> <a name="ip_list_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipListInput"></a>

```python
ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method_input`<sup>Optional</sup> <a name="login_method_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethodInput"></a>

```python
login_method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `okta_input`<sup>Optional</sup> <a name="okta_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.oktaInput"></a>

```python
okta_input: typing.Union[IResolvable, typing.List[AccessPolicyIncludeOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOkta">AccessPolicyIncludeOkta</a>]]

---

##### `saml_input`<sup>Optional</sup> <a name="saml_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.samlInput"></a>

```python
saml_input: typing.Union[IResolvable, typing.List[AccessPolicyIncludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>]]

---

##### `service_token_input`<sup>Optional</sup> <a name="service_token_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceTokenInput"></a>

```python
service_token_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_valid_service_token`<sup>Required</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `device_posture`<sup>Required</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain`<sup>Required</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method`<sup>Required</sup> <a name="login_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyInclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyInclude">AccessPolicyInclude</a>]

---


### AccessPolicyIncludeSamlList <a name="AccessPolicyIncludeSamlList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeSamlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyIncludeSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyIncludeSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>]]

---


### AccessPolicyIncludeSamlOutputReference <a name="AccessPolicyIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyIncludeSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSamlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyIncludeSaml]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyIncludeSaml">AccessPolicyIncludeSaml</a>]

---


### AccessPolicyRequireAzureList <a name="AccessPolicyRequireAzureList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireAzureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyRequireAzureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyRequireAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>]]

---


### AccessPolicyRequireAzureOutputReference <a name="AccessPolicyRequireAzureOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireAzureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.idInput">id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.id">id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.idInput"></a>

```python
id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.id"></a>

```python
id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyRequireAzure]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>]

---


### AccessPolicyRequireExternalEvaluationOutputReference <a name="AccessPolicyRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl">reset_evaluate_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl">reset_keys_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluate_url` <a name="reset_evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```python
def reset_evaluate_url() -> None
```

##### `reset_keys_url` <a name="reset_keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```python
def reset_keys_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput">evaluate_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput">keys_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl">evaluate_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl">keys_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate_url_input`<sup>Optional</sup> <a name="evaluate_url_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```python
evaluate_url_input: str
```

- *Type:* str

---

##### `keys_url_input`<sup>Optional</sup> <a name="keys_url_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```python
keys_url_input: str
```

- *Type:* str

---

##### `evaluate_url`<sup>Required</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```python
evaluate_url: str
```

- *Type:* str

---

##### `keys_url`<sup>Required</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```python
keys_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference.property.internalValue"></a>

```python
internal_value: AccessPolicyRequireExternalEvaluation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>

---


### AccessPolicyRequireGithubList <a name="AccessPolicyRequireGithubList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireGithubList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyRequireGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyRequireGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>]]

---


### AccessPolicyRequireGithubOutputReference <a name="AccessPolicyRequireGithubOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireGithubOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetTeams">reset_teams</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_teams` <a name="reset_teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.resetTeams"></a>

```python
def reset_teams() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teamsInput">teams_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teams">teams</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `teams_input`<sup>Optional</sup> <a name="teams_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teamsInput"></a>

```python
teams_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `teams`<sup>Required</sup> <a name="teams" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.teams"></a>

```python
teams: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyRequireGithub]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>]

---


### AccessPolicyRequireGsuiteList <a name="AccessPolicyRequireGsuiteList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireGsuiteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyRequireGsuiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyRequireGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>]]

---


### AccessPolicyRequireGsuiteOutputReference <a name="AccessPolicyRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireGsuiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyRequireGsuite]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>]

---


### AccessPolicyRequireList <a name="AccessPolicyRequireList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyRequireOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyRequire]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]]

---


### AccessPolicyRequireOktaList <a name="AccessPolicyRequireOktaList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireOktaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyRequireOktaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyRequireOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>]]

---


### AccessPolicyRequireOktaOutputReference <a name="AccessPolicyRequireOktaOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireOktaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.nameInput">name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.name">name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.nameInput"></a>

```python
name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.name"></a>

```python
name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyRequireOkta]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>]

---


### AccessPolicyRequireOutputReference <a name="AccessPolicyRequireOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAzure">put_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation">put_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGithub">put_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGsuite">put_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putOkta">put_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putSaml">put_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAnyValidServiceToken">reset_any_valid_service_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAuthMethod">reset_auth_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAzure">reset_azure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetDevicePosture">reset_device_posture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmailDomain">reset_email_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEveryone">reset_everyone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetExternalEvaluation">reset_external_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGeo">reset_geo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGithub">reset_github</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGsuite">reset_gsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIp">reset_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIpList">reset_ip_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetLoginMethod">reset_login_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetOkta">reset_okta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetSaml">reset_saml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetServiceToken">reset_service_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure` <a name="put_azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAzure"></a>

```python
def put_azure(
  value: typing.Union[IResolvable, typing.List[AccessPolicyRequireAzure]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>]]

---

##### `put_external_evaluation` <a name="put_external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation"></a>

```python
def put_external_evaluation(
  evaluate_url: str = None,
  keys_url: str = None
) -> None
```

###### `evaluate_url`<sup>Optional</sup> <a name="evaluate_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation.parameter.evaluateUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#evaluate_url AccessPolicy#evaluate_url}.

---

###### `keys_url`<sup>Optional</sup> <a name="keys_url" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putExternalEvaluation.parameter.keysUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.12.0/docs/resources/access_policy#keys_url AccessPolicy#keys_url}.

---

##### `put_github` <a name="put_github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGithub"></a>

```python
def put_github(
  value: typing.Union[IResolvable, typing.List[AccessPolicyRequireGithub]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>]]

---

##### `put_gsuite` <a name="put_gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGsuite"></a>

```python
def put_gsuite(
  value: typing.Union[IResolvable, typing.List[AccessPolicyRequireGsuite]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>]]

---

##### `put_okta` <a name="put_okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putOkta"></a>

```python
def put_okta(
  value: typing.Union[IResolvable, typing.List[AccessPolicyRequireOkta]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>]]

---

##### `put_saml` <a name="put_saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putSaml"></a>

```python
def put_saml(
  value: typing.Union[IResolvable, typing.List[AccessPolicyRequireSaml]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>]]

---

##### `reset_any_valid_service_token` <a name="reset_any_valid_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAnyValidServiceToken"></a>

```python
def reset_any_valid_service_token() -> None
```

##### `reset_auth_method` <a name="reset_auth_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAuthMethod"></a>

```python
def reset_auth_method() -> None
```

##### `reset_azure` <a name="reset_azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetAzure"></a>

```python
def reset_azure() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_device_posture` <a name="reset_device_posture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetDevicePosture"></a>

```python
def reset_device_posture() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_email_domain` <a name="reset_email_domain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEmailDomain"></a>

```python
def reset_email_domain() -> None
```

##### `reset_everyone` <a name="reset_everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetEveryone"></a>

```python
def reset_everyone() -> None
```

##### `reset_external_evaluation` <a name="reset_external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetExternalEvaluation"></a>

```python
def reset_external_evaluation() -> None
```

##### `reset_geo` <a name="reset_geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGeo"></a>

```python
def reset_geo() -> None
```

##### `reset_github` <a name="reset_github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGithub"></a>

```python
def reset_github() -> None
```

##### `reset_group` <a name="reset_group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_gsuite` <a name="reset_gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetGsuite"></a>

```python
def reset_gsuite() -> None
```

##### `reset_ip` <a name="reset_ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIp"></a>

```python
def reset_ip() -> None
```

##### `reset_ip_list` <a name="reset_ip_list" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetIpList"></a>

```python
def reset_ip_list() -> None
```

##### `reset_login_method` <a name="reset_login_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetLoginMethod"></a>

```python
def reset_login_method() -> None
```

##### `reset_okta` <a name="reset_okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetOkta"></a>

```python
def reset_okta() -> None
```

##### `reset_saml` <a name="reset_saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetSaml"></a>

```python
def reset_saml() -> None
```

##### `reset_service_token` <a name="reset_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.resetServiceToken"></a>

```python
def reset_service_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList">AccessPolicyRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluation">external_evaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference">AccessPolicyRequireExternalEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.github">github</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList">AccessPolicyRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuite">gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList">AccessPolicyRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.okta">okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList">AccessPolicyRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList">AccessPolicyRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceTokenInput">any_valid_service_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethodInput">auth_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azureInput">azure_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePostureInput">device_posture_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomainInput">email_domain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailInput">email_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyoneInput">everyone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluationInput">external_evaluation_input</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geoInput">geo_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.githubInput">github_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.groupInput">group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuiteInput">gsuite_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipInput">ip_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipListInput">ip_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethodInput">login_method_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.oktaInput">okta_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.samlInput">saml_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceTokenInput">service_token_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceToken">any_valid_service_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethod">auth_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificate">certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePosture">device_posture</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.email">email</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomain">email_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyone">everyone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geo">geo</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.group">group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ip">ip</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipList">ip_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethod">login_method</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceToken">service_token</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azure"></a>

```python
azure: AccessPolicyRequireAzureList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzureList">AccessPolicyRequireAzureList</a>

---

##### `external_evaluation`<sup>Required</sup> <a name="external_evaluation" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluation"></a>

```python
external_evaluation: AccessPolicyRequireExternalEvaluationOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluationOutputReference">AccessPolicyRequireExternalEvaluationOutputReference</a>

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.github"></a>

```python
github: AccessPolicyRequireGithubList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithubList">AccessPolicyRequireGithubList</a>

---

##### `gsuite`<sup>Required</sup> <a name="gsuite" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuite"></a>

```python
gsuite: AccessPolicyRequireGsuiteList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuiteList">AccessPolicyRequireGsuiteList</a>

---

##### `okta`<sup>Required</sup> <a name="okta" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.okta"></a>

```python
okta: AccessPolicyRequireOktaList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOktaList">AccessPolicyRequireOktaList</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.saml"></a>

```python
saml: AccessPolicyRequireSamlList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList">AccessPolicyRequireSamlList</a>

---

##### `any_valid_service_token_input`<sup>Optional</sup> <a name="any_valid_service_token_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceTokenInput"></a>

```python
any_valid_service_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_method_input`<sup>Optional</sup> <a name="auth_method_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethodInput"></a>

```python
auth_method_input: str
```

- *Type:* str

---

##### `azure_input`<sup>Optional</sup> <a name="azure_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.azureInput"></a>

```python
azure_input: typing.Union[IResolvable, typing.List[AccessPolicyRequireAzure]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireAzure">AccessPolicyRequireAzure</a>]]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `device_posture_input`<sup>Optional</sup> <a name="device_posture_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePostureInput"></a>

```python
device_posture_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain_input`<sup>Optional</sup> <a name="email_domain_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomainInput"></a>

```python
email_domain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailInput"></a>

```python
email_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone_input`<sup>Optional</sup> <a name="everyone_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyoneInput"></a>

```python
everyone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_evaluation_input`<sup>Optional</sup> <a name="external_evaluation_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.externalEvaluationInput"></a>

```python
external_evaluation_input: AccessPolicyRequireExternalEvaluation
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireExternalEvaluation">AccessPolicyRequireExternalEvaluation</a>

---

##### `geo_input`<sup>Optional</sup> <a name="geo_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geoInput"></a>

```python
geo_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `github_input`<sup>Optional</sup> <a name="github_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.githubInput"></a>

```python
github_input: typing.Union[IResolvable, typing.List[AccessPolicyRequireGithub]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGithub">AccessPolicyRequireGithub</a>]]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.groupInput"></a>

```python
group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `gsuite_input`<sup>Optional</sup> <a name="gsuite_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.gsuiteInput"></a>

```python
gsuite_input: typing.Union[IResolvable, typing.List[AccessPolicyRequireGsuite]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireGsuite">AccessPolicyRequireGsuite</a>]]

---

##### `ip_input`<sup>Optional</sup> <a name="ip_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipInput"></a>

```python
ip_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list_input`<sup>Optional</sup> <a name="ip_list_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipListInput"></a>

```python
ip_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method_input`<sup>Optional</sup> <a name="login_method_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethodInput"></a>

```python
login_method_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `okta_input`<sup>Optional</sup> <a name="okta_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.oktaInput"></a>

```python
okta_input: typing.Union[IResolvable, typing.List[AccessPolicyRequireOkta]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOkta">AccessPolicyRequireOkta</a>]]

---

##### `saml_input`<sup>Optional</sup> <a name="saml_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.samlInput"></a>

```python
saml_input: typing.Union[IResolvable, typing.List[AccessPolicyRequireSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>]]

---

##### `service_token_input`<sup>Optional</sup> <a name="service_token_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceTokenInput"></a>

```python
service_token_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `any_valid_service_token`<sup>Required</sup> <a name="any_valid_service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.anyValidServiceToken"></a>

```python
any_valid_service_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_method`<sup>Required</sup> <a name="auth_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.authMethod"></a>

```python
auth_method: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.certificate"></a>

```python
certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `device_posture`<sup>Required</sup> <a name="device_posture" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.devicePosture"></a>

```python
device_posture: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.email"></a>

```python
email: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_domain`<sup>Required</sup> <a name="email_domain" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.emailDomain"></a>

```python
email_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `everyone`<sup>Required</sup> <a name="everyone" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.everyone"></a>

```python
everyone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo`<sup>Required</sup> <a name="geo" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.geo"></a>

```python
geo: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.group"></a>

```python
group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ip"></a>

```python
ip: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_list`<sup>Required</sup> <a name="ip_list" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.ipList"></a>

```python
ip_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `login_method`<sup>Required</sup> <a name="login_method" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.loginMethod"></a>

```python
login_method: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_token`<sup>Required</sup> <a name="service_token" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.serviceToken"></a>

```python
service_token: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyRequire]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequire">AccessPolicyRequire</a>]

---


### AccessPolicyRequireSamlList <a name="AccessPolicyRequireSamlList" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireSamlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessPolicyRequireSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessPolicyRequireSaml]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>]]

---


### AccessPolicyRequireSamlOutputReference <a name="AccessPolicyRequireSamlOutputReference" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_cloudflare import access_policy

accessPolicy.AccessPolicyRequireSamlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeName">reset_attribute_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeValue">reset_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetIdentityProviderId">reset_identity_provider_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attribute_name` <a name="reset_attribute_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeName"></a>

```python
def reset_attribute_name() -> None
```

##### `reset_attribute_value` <a name="reset_attribute_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetAttributeValue"></a>

```python
def reset_attribute_value() -> None
```

##### `reset_identity_provider_id` <a name="reset_identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.resetIdentityProviderId"></a>

```python
def reset_identity_provider_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeNameInput">attribute_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValueInput">attribute_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderIdInput">identity_provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderId">identity_provider_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name_input`<sup>Optional</sup> <a name="attribute_name_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeNameInput"></a>

```python
attribute_name_input: str
```

- *Type:* str

---

##### `attribute_value_input`<sup>Optional</sup> <a name="attribute_value_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValueInput"></a>

```python
attribute_value_input: str
```

- *Type:* str

---

##### `identity_provider_id_input`<sup>Optional</sup> <a name="identity_provider_id_input" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderIdInput"></a>

```python
identity_provider_id_input: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `identity_provider_id`<sup>Required</sup> <a name="identity_provider_id" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.identityProviderId"></a>

```python
identity_provider_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSamlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessPolicyRequireSaml]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-cloudflare.accessPolicy.AccessPolicyRequireSaml">AccessPolicyRequireSaml</a>]

---



