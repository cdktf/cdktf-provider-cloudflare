# `leakedCredentialCheckRule` Submodule <a name="`leakedCredentialCheckRule` Submodule" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LeakedCredentialCheckRule <a name="LeakedCredentialCheckRule" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/leaked_credential_check_rule cloudflare_leaked_credential_check_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/leakedcredentialcheckrule"

leakedcredentialcheckrule.NewLeakedCredentialCheckRule(scope Construct, id *string, config LeakedCredentialCheckRuleConfig) LeakedCredentialCheckRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig">LeakedCredentialCheckRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig">LeakedCredentialCheckRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LeakedCredentialCheckRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/leakedcredentialcheckrule"

leakedcredentialcheckrule.LeakedCredentialCheckRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/leakedcredentialcheckrule"

leakedcredentialcheckrule.LeakedCredentialCheckRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/leakedcredentialcheckrule"

leakedcredentialcheckrule.LeakedCredentialCheckRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/leakedcredentialcheckrule"

leakedcredentialcheckrule.LeakedCredentialCheckRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LeakedCredentialCheckRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LeakedCredentialCheckRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LeakedCredentialCheckRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/leaked_credential_check_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LeakedCredentialCheckRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LeakedCredentialCheckRuleConfig <a name="LeakedCredentialCheckRuleConfig" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/leakedcredentialcheckrule"

&leakedcredentialcheckrule.LeakedCredentialCheckRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Password: *string,
	Username: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.password">Password</a></code> | <code>*string</code> | The ruleset expression to use in matching the password in a request. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.username">Username</a></code> | <code>*string</code> | The ruleset expression to use in matching the username in a request. |
| <code><a href="#@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The ruleset expression to use in matching the password in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/leaked_credential_check_rule#password LeakedCredentialCheckRule#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The ruleset expression to use in matching the username in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/leaked_credential_check_rule#username LeakedCredentialCheckRule#username}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.leakedCredentialCheckRule.LeakedCredentialCheckRuleConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/leaked_credential_check_rule#zone_id LeakedCredentialCheckRule#zone_id}

---



