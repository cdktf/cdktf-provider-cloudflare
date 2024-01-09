# `accessIdentityProvider` Submodule <a name="`accessIdentityProvider` Submodule" id="@cdktf/provider-cloudflare.accessIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessIdentityProvider <a name="AccessIdentityProvider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider cloudflare_access_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

accessidentityprovider.NewAccessIdentityProvider(scope Construct, id *string, config AccessIdentityProviderConfig) AccessIdentityProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig">AccessIdentityProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig">AccessIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putScimConfig">PutScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetScimConfig">ResetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig"></a>

```go
func PutConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScimConfig` <a name="PutScimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putScimConfig"></a>

```go
func PutScimConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.putScimConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetScimConfig` <a name="ResetScimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetScimConfig"></a>

```go
func ResetScimConfig()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccessIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

accessidentityprovider.AccessIdentityProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

accessidentityprovider.AccessIdentityProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

accessidentityprovider.AccessIdentityProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

accessidentityprovider.AccessIdentityProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AccessIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccessIdentityProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccessIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AccessIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList">AccessIdentityProviderConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList">AccessIdentityProviderScimConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.configInput">ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfigInput">ScimConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.config"></a>

```go
func Config() AccessIdentityProviderConfigAList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList">AccessIdentityProviderConfigAList</a>

---

##### `ScimConfig`<sup>Required</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfig"></a>

```go
func ScimConfig() AccessIdentityProviderScimConfigList
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList">AccessIdentityProviderScimConfigList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.configInput"></a>

```go
func ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScimConfigInput`<sup>Optional</sup> <a name="ScimConfigInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.scimConfigInput"></a>

```go
func ScimConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessIdentityProviderConfig <a name="AccessIdentityProviderConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

&accessidentityprovider.AccessIdentityProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	AccountId: *string,
	Config: interface{},
	Id: *string,
	ScimConfig: interface{},
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.name">Name</a></code> | <code>*string</code> | Friendly name of the Access Identity Provider configuration. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.type">Type</a></code> | <code>*string</code> | The provider type to use. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.accountId">AccountId</a></code> | <code>*string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.config">Config</a></code> | <code>interface{}</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.scimConfig">ScimConfig</a></code> | <code>interface{}</code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | The zone identifier to target for the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Friendly name of the Access Identity Provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#name AccessIdentityProvider#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The provider type to use.

Available values: `azureAD`, `centrify`, `facebook`, `github`, `google`, `google-apps`, `linkedin`, `oidc`, `okta`, `onelogin`, `onetimepin`, `pingone`, `saml`, `yandex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#type AccessIdentityProvider#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#account_id AccessIdentityProvider#account_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.config"></a>

```go
Config interface{}
```

- *Type:* interface{}

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#config AccessIdentityProvider#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#id AccessIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScimConfig`<sup>Optional</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.scimConfig"></a>

```go
ScimConfig interface{}
```

- *Type:* interface{}

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#scim_config AccessIdentityProvider#scim_config}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#zone_id AccessIdentityProvider#zone_id}

---

### AccessIdentityProviderConfigA <a name="AccessIdentityProviderConfigA" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

&accessidentityprovider.AccessIdentityProviderConfigA {
	ApiToken: *string,
	AppsDomain: *string,
	Attributes: *[]*string,
	AuthorizationServerId: *string,
	AuthUrl: *string,
	CentrifyAccount: *string,
	CentrifyAppId: *string,
	CertsUrl: *string,
	Claims: *[]*string,
	ClientId: *string,
	ClientSecret: *string,
	ConditionalAccessEnabled: interface{},
	DirectoryId: *string,
	EmailAttributeName: *string,
	EmailClaimName: *string,
	IdpPublicCert: *string,
	IssuerUrl: *string,
	OktaAccount: *string,
	OneloginAccount: *string,
	PingEnvId: *string,
	PkceEnabled: interface{},
	Scopes: *[]*string,
	SignRequest: interface{},
	SsoTargetUrl: *string,
	SupportGroups: interface{},
	TokenUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.apiToken">ApiToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#api_token AccessIdentityProvider#api_token}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.appsDomain">AppsDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#apps_domain AccessIdentityProvider#apps_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.attributes">Attributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#attributes AccessIdentityProvider#attributes}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authorizationServerId">AuthorizationServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#authorization_server_id AccessIdentityProvider#authorization_server_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authUrl">AuthUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#auth_url AccessIdentityProvider#auth_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAccount">CentrifyAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#centrify_account AccessIdentityProvider#centrify_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAppId">CentrifyAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#centrify_app_id AccessIdentityProvider#centrify_app_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.certsUrl">CertsUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#certs_url AccessIdentityProvider#certs_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.claims">Claims</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#claims AccessIdentityProvider#claims}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#client_id AccessIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#client_secret AccessIdentityProvider#client_secret}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.conditionalAccessEnabled">ConditionalAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#conditional_access_enabled AccessIdentityProvider#conditional_access_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#directory_id AccessIdentityProvider#directory_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailAttributeName">EmailAttributeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#email_attribute_name AccessIdentityProvider#email_attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailClaimName">EmailClaimName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#email_claim_name AccessIdentityProvider#email_claim_name}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.idpPublicCert">IdpPublicCert</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#idp_public_cert AccessIdentityProvider#idp_public_cert}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#issuer_url AccessIdentityProvider#issuer_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oktaAccount">OktaAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#okta_account AccessIdentityProvider#okta_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oneloginAccount">OneloginAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#onelogin_account AccessIdentityProvider#onelogin_account}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pingEnvId">PingEnvId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#ping_env_id AccessIdentityProvider#ping_env_id}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pkceEnabled">PkceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#pkce_enabled AccessIdentityProvider#pkce_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#scopes AccessIdentityProvider#scopes}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.signRequest">SignRequest</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#sign_request AccessIdentityProvider#sign_request}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#sso_target_url AccessIdentityProvider#sso_target_url}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.supportGroups">SupportGroups</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#support_groups AccessIdentityProvider#support_groups}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#token_url AccessIdentityProvider#token_url}. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.apiToken"></a>

```go
ApiToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#api_token AccessIdentityProvider#api_token}.

---

##### `AppsDomain`<sup>Optional</sup> <a name="AppsDomain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.appsDomain"></a>

```go
AppsDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#apps_domain AccessIdentityProvider#apps_domain}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.attributes"></a>

```go
Attributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#attributes AccessIdentityProvider#attributes}.

---

##### `AuthorizationServerId`<sup>Optional</sup> <a name="AuthorizationServerId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authorizationServerId"></a>

```go
AuthorizationServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#authorization_server_id AccessIdentityProvider#authorization_server_id}.

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.authUrl"></a>

```go
AuthUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#auth_url AccessIdentityProvider#auth_url}.

---

##### `CentrifyAccount`<sup>Optional</sup> <a name="CentrifyAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAccount"></a>

```go
CentrifyAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#centrify_account AccessIdentityProvider#centrify_account}.

---

##### `CentrifyAppId`<sup>Optional</sup> <a name="CentrifyAppId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.centrifyAppId"></a>

```go
CentrifyAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#centrify_app_id AccessIdentityProvider#centrify_app_id}.

---

##### `CertsUrl`<sup>Optional</sup> <a name="CertsUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.certsUrl"></a>

```go
CertsUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#certs_url AccessIdentityProvider#certs_url}.

---

##### `Claims`<sup>Optional</sup> <a name="Claims" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.claims"></a>

```go
Claims *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#claims AccessIdentityProvider#claims}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#client_id AccessIdentityProvider#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#client_secret AccessIdentityProvider#client_secret}.

---

##### `ConditionalAccessEnabled`<sup>Optional</sup> <a name="ConditionalAccessEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.conditionalAccessEnabled"></a>

```go
ConditionalAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#conditional_access_enabled AccessIdentityProvider#conditional_access_enabled}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#directory_id AccessIdentityProvider#directory_id}.

---

##### `EmailAttributeName`<sup>Optional</sup> <a name="EmailAttributeName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailAttributeName"></a>

```go
EmailAttributeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#email_attribute_name AccessIdentityProvider#email_attribute_name}.

---

##### `EmailClaimName`<sup>Optional</sup> <a name="EmailClaimName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.emailClaimName"></a>

```go
EmailClaimName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#email_claim_name AccessIdentityProvider#email_claim_name}.

---

##### `IdpPublicCert`<sup>Optional</sup> <a name="IdpPublicCert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.idpPublicCert"></a>

```go
IdpPublicCert *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#idp_public_cert AccessIdentityProvider#idp_public_cert}.

---

##### `IssuerUrl`<sup>Optional</sup> <a name="IssuerUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.issuerUrl"></a>

```go
IssuerUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#issuer_url AccessIdentityProvider#issuer_url}.

---

##### `OktaAccount`<sup>Optional</sup> <a name="OktaAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oktaAccount"></a>

```go
OktaAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#okta_account AccessIdentityProvider#okta_account}.

---

##### `OneloginAccount`<sup>Optional</sup> <a name="OneloginAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.oneloginAccount"></a>

```go
OneloginAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#onelogin_account AccessIdentityProvider#onelogin_account}.

---

##### `PingEnvId`<sup>Optional</sup> <a name="PingEnvId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pingEnvId"></a>

```go
PingEnvId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#ping_env_id AccessIdentityProvider#ping_env_id}.

---

##### `PkceEnabled`<sup>Optional</sup> <a name="PkceEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.pkceEnabled"></a>

```go
PkceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#pkce_enabled AccessIdentityProvider#pkce_enabled}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#scopes AccessIdentityProvider#scopes}.

---

##### `SignRequest`<sup>Optional</sup> <a name="SignRequest" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.signRequest"></a>

```go
SignRequest interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#sign_request AccessIdentityProvider#sign_request}.

---

##### `SsoTargetUrl`<sup>Optional</sup> <a name="SsoTargetUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.ssoTargetUrl"></a>

```go
SsoTargetUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#sso_target_url AccessIdentityProvider#sso_target_url}.

---

##### `SupportGroups`<sup>Optional</sup> <a name="SupportGroups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.supportGroups"></a>

```go
SupportGroups interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#support_groups AccessIdentityProvider#support_groups}.

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigA.property.tokenUrl"></a>

```go
TokenUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#token_url AccessIdentityProvider#token_url}.

---

### AccessIdentityProviderScimConfig <a name="AccessIdentityProviderScimConfig" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

&accessidentityprovider.AccessIdentityProviderScimConfig {
	Enabled: interface{},
	GroupMemberDeprovision: interface{},
	SeatDeprovision: interface{},
	Secret: *string,
	UserDeprovision: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#enabled AccessIdentityProvider#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.groupMemberDeprovision">GroupMemberDeprovision</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#group_member_deprovision AccessIdentityProvider#group_member_deprovision}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.seatDeprovision">SeatDeprovision</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#seat_deprovision AccessIdentityProvider#seat_deprovision}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.secret">Secret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#secret AccessIdentityProvider#secret}. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.userDeprovision">UserDeprovision</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#user_deprovision AccessIdentityProvider#user_deprovision}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#enabled AccessIdentityProvider#enabled}.

---

##### `GroupMemberDeprovision`<sup>Optional</sup> <a name="GroupMemberDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.groupMemberDeprovision"></a>

```go
GroupMemberDeprovision interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#group_member_deprovision AccessIdentityProvider#group_member_deprovision}.

---

##### `SeatDeprovision`<sup>Optional</sup> <a name="SeatDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.seatDeprovision"></a>

```go
SeatDeprovision interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#seat_deprovision AccessIdentityProvider#seat_deprovision}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#secret AccessIdentityProvider#secret}.

---

##### `UserDeprovision`<sup>Optional</sup> <a name="UserDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfig.property.userDeprovision"></a>

```go
UserDeprovision interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.21.0/docs/resources/access_identity_provider#user_deprovision AccessIdentityProvider#user_deprovision}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessIdentityProviderConfigAList <a name="AccessIdentityProviderConfigAList" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

accessidentityprovider.NewAccessIdentityProviderConfigAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessIdentityProviderConfigAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get"></a>

```go
func Get(index *f64) AccessIdentityProviderConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessIdentityProviderConfigAOutputReference <a name="AccessIdentityProviderConfigAOutputReference" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

accessidentityprovider.NewAccessIdentityProviderConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessIdentityProviderConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAppsDomain">ResetAppsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId">ResetAuthorizationServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthUrl">ResetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAccount">ResetCentrifyAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAppId">ResetCentrifyAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCertsUrl">ResetCertsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClaims">ResetClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled">ResetConditionalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailAttributeName">ResetEmailAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailClaimName">ResetEmailClaimName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIdpPublicCert">ResetIdpPublicCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIssuerUrl">ResetIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOktaAccount">ResetOktaAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOneloginAccount">ResetOneloginAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPingEnvId">ResetPingEnvId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPkceEnabled">ResetPkceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSignRequest">ResetSignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl">ResetSsoTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSupportGroups">ResetSupportGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetApiToken"></a>

```go
func ResetApiToken()
```

##### `ResetAppsDomain` <a name="ResetAppsDomain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAppsDomain"></a>

```go
func ResetAppsDomain()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAttributes"></a>

```go
func ResetAttributes()
```

##### `ResetAuthorizationServerId` <a name="ResetAuthorizationServerId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId"></a>

```go
func ResetAuthorizationServerId()
```

##### `ResetAuthUrl` <a name="ResetAuthUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetAuthUrl"></a>

```go
func ResetAuthUrl()
```

##### `ResetCentrifyAccount` <a name="ResetCentrifyAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAccount"></a>

```go
func ResetCentrifyAccount()
```

##### `ResetCentrifyAppId` <a name="ResetCentrifyAppId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCentrifyAppId"></a>

```go
func ResetCentrifyAppId()
```

##### `ResetCertsUrl` <a name="ResetCertsUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetCertsUrl"></a>

```go
func ResetCertsUrl()
```

##### `ResetClaims` <a name="ResetClaims" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClaims"></a>

```go
func ResetClaims()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetConditionalAccessEnabled` <a name="ResetConditionalAccessEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled"></a>

```go
func ResetConditionalAccessEnabled()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetDirectoryId"></a>

```go
func ResetDirectoryId()
```

##### `ResetEmailAttributeName` <a name="ResetEmailAttributeName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailAttributeName"></a>

```go
func ResetEmailAttributeName()
```

##### `ResetEmailClaimName` <a name="ResetEmailClaimName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetEmailClaimName"></a>

```go
func ResetEmailClaimName()
```

##### `ResetIdpPublicCert` <a name="ResetIdpPublicCert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIdpPublicCert"></a>

```go
func ResetIdpPublicCert()
```

##### `ResetIssuerUrl` <a name="ResetIssuerUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetIssuerUrl"></a>

```go
func ResetIssuerUrl()
```

##### `ResetOktaAccount` <a name="ResetOktaAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOktaAccount"></a>

```go
func ResetOktaAccount()
```

##### `ResetOneloginAccount` <a name="ResetOneloginAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetOneloginAccount"></a>

```go
func ResetOneloginAccount()
```

##### `ResetPingEnvId` <a name="ResetPingEnvId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPingEnvId"></a>

```go
func ResetPingEnvId()
```

##### `ResetPkceEnabled` <a name="ResetPkceEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetPkceEnabled"></a>

```go
func ResetPkceEnabled()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetSignRequest` <a name="ResetSignRequest" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSignRequest"></a>

```go
func ResetSignRequest()
```

##### `ResetSsoTargetUrl` <a name="ResetSsoTargetUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl"></a>

```go
func ResetSsoTargetUrl()
```

##### `ResetSupportGroups` <a name="ResetSupportGroups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetSupportGroups"></a>

```go
func ResetSupportGroups()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.resetTokenUrl"></a>

```go
func ResetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomainInput">AppsDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributesInput">AttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput">AuthorizationServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrlInput">AuthUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput">CentrifyAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput">CentrifyAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrlInput">CertsUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claimsInput">ClaimsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput">ConditionalAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput">EmailAttributeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput">EmailClaimNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput">IdpPublicCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccountInput">OktaAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput">OneloginAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput">PingEnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput">PkceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequestInput">SignRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput">SsoTargetUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroupsInput">SupportGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiToken">ApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomain">AppsDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributes">Attributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerId">AuthorizationServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccount">CentrifyAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppId">CentrifyAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrl">CertsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claims">Claims</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled">ConditionalAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeName">EmailAttributeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimName">EmailClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCert">IdpPublicCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccount">OktaAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccount">OneloginAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvId">PingEnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabled">PkceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequest">SignRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroups">SupportGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiTokenInput"></a>

```go
func ApiTokenInput() *string
```

- *Type:* *string

---

##### `AppsDomainInput`<sup>Optional</sup> <a name="AppsDomainInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomainInput"></a>

```go
func AppsDomainInput() *string
```

- *Type:* *string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributesInput"></a>

```go
func AttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationServerIdInput`<sup>Optional</sup> <a name="AuthorizationServerIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput"></a>

```go
func AuthorizationServerIdInput() *string
```

- *Type:* *string

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrlInput"></a>

```go
func AuthUrlInput() *string
```

- *Type:* *string

---

##### `CentrifyAccountInput`<sup>Optional</sup> <a name="CentrifyAccountInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput"></a>

```go
func CentrifyAccountInput() *string
```

- *Type:* *string

---

##### `CentrifyAppIdInput`<sup>Optional</sup> <a name="CentrifyAppIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput"></a>

```go
func CentrifyAppIdInput() *string
```

- *Type:* *string

---

##### `CertsUrlInput`<sup>Optional</sup> <a name="CertsUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrlInput"></a>

```go
func CertsUrlInput() *string
```

- *Type:* *string

---

##### `ClaimsInput`<sup>Optional</sup> <a name="ClaimsInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claimsInput"></a>

```go
func ClaimsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ConditionalAccessEnabledInput`<sup>Optional</sup> <a name="ConditionalAccessEnabledInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput"></a>

```go
func ConditionalAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `EmailAttributeNameInput`<sup>Optional</sup> <a name="EmailAttributeNameInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput"></a>

```go
func EmailAttributeNameInput() *string
```

- *Type:* *string

---

##### `EmailClaimNameInput`<sup>Optional</sup> <a name="EmailClaimNameInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput"></a>

```go
func EmailClaimNameInput() *string
```

- *Type:* *string

---

##### `IdpPublicCertInput`<sup>Optional</sup> <a name="IdpPublicCertInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput"></a>

```go
func IdpPublicCertInput() *string
```

- *Type:* *string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrlInput"></a>

```go
func IssuerUrlInput() *string
```

- *Type:* *string

---

##### `OktaAccountInput`<sup>Optional</sup> <a name="OktaAccountInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccountInput"></a>

```go
func OktaAccountInput() *string
```

- *Type:* *string

---

##### `OneloginAccountInput`<sup>Optional</sup> <a name="OneloginAccountInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput"></a>

```go
func OneloginAccountInput() *string
```

- *Type:* *string

---

##### `PingEnvIdInput`<sup>Optional</sup> <a name="PingEnvIdInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput"></a>

```go
func PingEnvIdInput() *string
```

- *Type:* *string

---

##### `PkceEnabledInput`<sup>Optional</sup> <a name="PkceEnabledInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput"></a>

```go
func PkceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SignRequestInput`<sup>Optional</sup> <a name="SignRequestInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequestInput"></a>

```go
func SignRequestInput() interface{}
```

- *Type:* interface{}

---

##### `SsoTargetUrlInput`<sup>Optional</sup> <a name="SsoTargetUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput"></a>

```go
func SsoTargetUrlInput() *string
```

- *Type:* *string

---

##### `SupportGroupsInput`<sup>Optional</sup> <a name="SupportGroupsInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroupsInput"></a>

```go
func SupportGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrlInput"></a>

```go
func TokenUrlInput() *string
```

- *Type:* *string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.apiToken"></a>

```go
func ApiToken() *string
```

- *Type:* *string

---

##### `AppsDomain`<sup>Required</sup> <a name="AppsDomain" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.appsDomain"></a>

```go
func AppsDomain() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.attributes"></a>

```go
func Attributes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizationServerId`<sup>Required</sup> <a name="AuthorizationServerId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authorizationServerId"></a>

```go
func AuthorizationServerId() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `CentrifyAccount`<sup>Required</sup> <a name="CentrifyAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAccount"></a>

```go
func CentrifyAccount() *string
```

- *Type:* *string

---

##### `CentrifyAppId`<sup>Required</sup> <a name="CentrifyAppId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.centrifyAppId"></a>

```go
func CentrifyAppId() *string
```

- *Type:* *string

---

##### `CertsUrl`<sup>Required</sup> <a name="CertsUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.certsUrl"></a>

```go
func CertsUrl() *string
```

- *Type:* *string

---

##### `Claims`<sup>Required</sup> <a name="Claims" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.claims"></a>

```go
func Claims() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ConditionalAccessEnabled`<sup>Required</sup> <a name="ConditionalAccessEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled"></a>

```go
func ConditionalAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `EmailAttributeName`<sup>Required</sup> <a name="EmailAttributeName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailAttributeName"></a>

```go
func EmailAttributeName() *string
```

- *Type:* *string

---

##### `EmailClaimName`<sup>Required</sup> <a name="EmailClaimName" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.emailClaimName"></a>

```go
func EmailClaimName() *string
```

- *Type:* *string

---

##### `IdpPublicCert`<sup>Required</sup> <a name="IdpPublicCert" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.idpPublicCert"></a>

```go
func IdpPublicCert() *string
```

- *Type:* *string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.issuerUrl"></a>

```go
func IssuerUrl() *string
```

- *Type:* *string

---

##### `OktaAccount`<sup>Required</sup> <a name="OktaAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oktaAccount"></a>

```go
func OktaAccount() *string
```

- *Type:* *string

---

##### `OneloginAccount`<sup>Required</sup> <a name="OneloginAccount" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.oneloginAccount"></a>

```go
func OneloginAccount() *string
```

- *Type:* *string

---

##### `PingEnvId`<sup>Required</sup> <a name="PingEnvId" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pingEnvId"></a>

```go
func PingEnvId() *string
```

- *Type:* *string

---

##### `PkceEnabled`<sup>Required</sup> <a name="PkceEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.pkceEnabled"></a>

```go
func PkceEnabled() interface{}
```

- *Type:* interface{}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `SignRequest`<sup>Required</sup> <a name="SignRequest" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.signRequest"></a>

```go
func SignRequest() interface{}
```

- *Type:* interface{}

---

##### `SsoTargetUrl`<sup>Required</sup> <a name="SsoTargetUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl"></a>

```go
func SsoTargetUrl() *string
```

- *Type:* *string

---

##### `SupportGroups`<sup>Required</sup> <a name="SupportGroups" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.supportGroups"></a>

```go
func SupportGroups() interface{}
```

- *Type:* interface{}

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessIdentityProviderScimConfigList <a name="AccessIdentityProviderScimConfigList" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

accessidentityprovider.NewAccessIdentityProviderScimConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessIdentityProviderScimConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.get"></a>

```go
func Get(index *f64) AccessIdentityProviderScimConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessIdentityProviderScimConfigOutputReference <a name="AccessIdentityProviderScimConfigOutputReference" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v10/accessidentityprovider"

accessidentityprovider.NewAccessIdentityProviderScimConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessIdentityProviderScimConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision">ResetGroupMemberDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision">ResetSeatDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetUserDeprovision">ResetUserDeprovision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetGroupMemberDeprovision` <a name="ResetGroupMemberDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision"></a>

```go
func ResetGroupMemberDeprovision()
```

##### `ResetSeatDeprovision` <a name="ResetSeatDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision"></a>

```go
func ResetSeatDeprovision()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetSecret"></a>

```go
func ResetSecret()
```

##### `ResetUserDeprovision` <a name="ResetUserDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.resetUserDeprovision"></a>

```go
func ResetUserDeprovision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput">GroupMemberDeprovisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput">SeatDeprovisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput">UserDeprovisionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision">GroupMemberDeprovision</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovision">SeatDeprovision</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovision">UserDeprovision</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GroupMemberDeprovisionInput`<sup>Optional</sup> <a name="GroupMemberDeprovisionInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput"></a>

```go
func GroupMemberDeprovisionInput() interface{}
```

- *Type:* interface{}

---

##### `SeatDeprovisionInput`<sup>Optional</sup> <a name="SeatDeprovisionInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput"></a>

```go
func SeatDeprovisionInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `UserDeprovisionInput`<sup>Optional</sup> <a name="UserDeprovisionInput" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput"></a>

```go
func UserDeprovisionInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `GroupMemberDeprovision`<sup>Required</sup> <a name="GroupMemberDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision"></a>

```go
func GroupMemberDeprovision() interface{}
```

- *Type:* interface{}

---

##### `SeatDeprovision`<sup>Required</sup> <a name="SeatDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.seatDeprovision"></a>

```go
func SeatDeprovision() interface{}
```

- *Type:* interface{}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `UserDeprovision`<sup>Required</sup> <a name="UserDeprovision" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.userDeprovision"></a>

```go
func UserDeprovision() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accessIdentityProvider.AccessIdentityProviderScimConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



