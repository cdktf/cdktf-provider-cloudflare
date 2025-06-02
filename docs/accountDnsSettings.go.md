# `accountDnsSettings` Submodule <a name="`accountDnsSettings` Submodule" id="@cdktf/provider-cloudflare.accountDnsSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountDnsSettings <a name="AccountDnsSettings" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings cloudflare_account_dns_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

accountdnssettings.NewAccountDnsSettings(scope Construct, id *string, config AccountDnsSettingsConfig) AccountDnsSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig">AccountDnsSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig">AccountDnsSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults">PutZoneDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults">ResetZoneDefaults</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutZoneDefaults` <a name="PutZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults"></a>

```go
func PutZoneDefaults(value AccountDnsSettingsZoneDefaults)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.putZoneDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

---

##### `ResetZoneDefaults` <a name="ResetZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.resetZoneDefaults"></a>

```go
func ResetZoneDefaults()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

accountdnssettings.AccountDnsSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

accountdnssettings.AccountDnsSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

accountdnssettings.AccountDnsSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

accountdnssettings.AccountDnsSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AccountDnsSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccountDnsSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccountDnsSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AccountDnsSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults">ZoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput">ZoneDefaultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneDefaults`<sup>Required</sup> <a name="ZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaults"></a>

```go
func ZoneDefaults() AccountDnsSettingsZoneDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference">AccountDnsSettingsZoneDefaultsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ZoneDefaultsInput`<sup>Optional</sup> <a name="ZoneDefaultsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.zoneDefaultsInput"></a>

```go
func ZoneDefaultsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountDnsSettingsConfig <a name="AccountDnsSettingsConfig" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

&accountdnssettings.AccountDnsSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	ZoneDefaults: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.accountDnsSettings.AccountDnsSettingsZoneDefaults,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults">ZoneDefaults</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#account_id AccountDnsSettings#account_id}

---

##### `ZoneDefaults`<sup>Optional</sup> <a name="ZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsConfig.property.zoneDefaults"></a>

```go
ZoneDefaults AccountDnsSettingsZoneDefaults
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults">AccountDnsSettingsZoneDefaults</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#zone_defaults AccountDnsSettings#zone_defaults}.

---

### AccountDnsSettingsZoneDefaults <a name="AccountDnsSettingsZoneDefaults" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

&accountdnssettings.AccountDnsSettingsZoneDefaults {
	FlattenAllCnames: interface{},
	FoundationDns: interface{},
	InternalDns: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns,
	MultiProvider: interface{},
	Nameservers: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers,
	NsTtl: *f64,
	SecondaryOverrides: interface{},
	Soa: github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa,
	ZoneMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>interface{}</code> | Whether to flatten all CNAME records in the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns">FoundationDns</a></code> | <code>interface{}</code> | Whether to enable Foundation DNS Advanced Nameservers on the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a></code> | Settings for this internal zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider">MultiProvider</a></code> | <code>interface{}</code> | Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a></code> | Settings determining the nameservers through which the zone should be available. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl">NsTtl</a></code> | <code>*f64</code> | The time to live (TTL) of the zone's nameserver (NS) records. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>interface{}</code> | Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a></code> | Components of the zone's SOA record. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode">ZoneMode</a></code> | <code>*string</code> | Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only". |

---

##### `FlattenAllCnames`<sup>Optional</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.flattenAllCnames"></a>

```go
FlattenAllCnames interface{}
```

- *Type:* interface{}

Whether to flatten all CNAME records in the zone.

Note that, due to DNS limitations, a CNAME record at the zone apex will always be flattened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#flatten_all_cnames AccountDnsSettings#flatten_all_cnames}

---

##### `FoundationDns`<sup>Optional</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.foundationDns"></a>

```go
FoundationDns interface{}
```

- *Type:* interface{}

Whether to enable Foundation DNS Advanced Nameservers on the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#foundation_dns AccountDnsSettings#foundation_dns}

---

##### `InternalDns`<sup>Optional</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.internalDns"></a>

```go
InternalDns AccountDnsSettingsZoneDefaultsInternalDns
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

Settings for this internal zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#internal_dns AccountDnsSettings#internal_dns}

---

##### `MultiProvider`<sup>Optional</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.multiProvider"></a>

```go
MultiProvider interface{}
```

- *Type:* interface{}

Whether to enable multi-provider DNS, which causes Cloudflare to activate the zone even when non-Cloudflare NS records exist, and to respect NS records at the zone apex during outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#multi_provider AccountDnsSettings#multi_provider}

---

##### `Nameservers`<sup>Optional</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nameservers"></a>

```go
Nameservers AccountDnsSettingsZoneDefaultsNameservers
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

Settings determining the nameservers through which the zone should be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#nameservers AccountDnsSettings#nameservers}

---

##### `NsTtl`<sup>Optional</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.nsTtl"></a>

```go
NsTtl *f64
```

- *Type:* *f64

The time to live (TTL) of the zone's nameserver (NS) records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#ns_ttl AccountDnsSettings#ns_ttl}

---

##### `SecondaryOverrides`<sup>Optional</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.secondaryOverrides"></a>

```go
SecondaryOverrides interface{}
```

- *Type:* interface{}

Allows a Secondary DNS zone to use (proxied) override records and CNAME flattening at the zone apex.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#secondary_overrides AccountDnsSettings#secondary_overrides}

---

##### `Soa`<sup>Optional</sup> <a name="Soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.soa"></a>

```go
Soa AccountDnsSettingsZoneDefaultsSoa
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

Components of the zone's SOA record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#soa AccountDnsSettings#soa}

---

##### `ZoneMode`<sup>Optional</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaults.property.zoneMode"></a>

```go
ZoneMode *string
```

- *Type:* *string

Whether the zone mode is a regular or CDN/DNS only zone. Available values: "standard", "cdn_only", "dns_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#zone_mode AccountDnsSettings#zone_mode}

---

### AccountDnsSettingsZoneDefaultsInternalDns <a name="AccountDnsSettingsZoneDefaultsInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

&accountdnssettings.AccountDnsSettingsZoneDefaultsInternalDns {
	ReferenceZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId">ReferenceZoneId</a></code> | <code>*string</code> | The ID of the zone to fallback to. |

---

##### `ReferenceZoneId`<sup>Optional</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns.property.referenceZoneId"></a>

```go
ReferenceZoneId *string
```

- *Type:* *string

The ID of the zone to fallback to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#reference_zone_id AccountDnsSettings#reference_zone_id}

---

### AccountDnsSettingsZoneDefaultsNameservers <a name="AccountDnsSettingsZoneDefaultsNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

&accountdnssettings.AccountDnsSettingsZoneDefaultsNameservers {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type">Type</a></code> | <code>*string</code> | Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant". |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers.property.type"></a>

```go
Type *string
```

- *Type:* *string

Nameserver type Available values: "cloudflare.standard", "cloudflare.standard.random", "custom.account", "custom.tenant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#type AccountDnsSettings#type}

---

### AccountDnsSettingsZoneDefaultsSoa <a name="AccountDnsSettingsZoneDefaultsSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

&accountdnssettings.AccountDnsSettingsZoneDefaultsSoa {
	Expire: *f64,
	MinTtl: *f64,
	Mname: *string,
	Refresh: *f64,
	Retry: *f64,
	Rname: *string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire">Expire</a></code> | <code>*f64</code> | Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl">MinTtl</a></code> | <code>*f64</code> | The time to live (TTL) for negative caching of records within the zone. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname">Mname</a></code> | <code>*string</code> | The primary nameserver, which may be used for outbound zone transfers. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh">Refresh</a></code> | <code>*f64</code> | Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry">Retry</a></code> | <code>*f64</code> | Time in seconds after which secondary servers should retry queries after the primary server was unresponsive. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname">Rname</a></code> | <code>*string</code> | The email address of the zone administrator, with the first label representing the local part of the email address. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl">Ttl</a></code> | <code>*f64</code> | The time to live (TTL) of the SOA record itself. |

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.expire"></a>

```go
Expire *f64
```

- *Type:* *f64

Time in seconds of being unable to query the primary server after which secondary servers should stop serving the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#expire AccountDnsSettings#expire}

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.minTtl"></a>

```go
MinTtl *f64
```

- *Type:* *f64

The time to live (TTL) for negative caching of records within the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#min_ttl AccountDnsSettings#min_ttl}

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.mname"></a>

```go
Mname *string
```

- *Type:* *string

The primary nameserver, which may be used for outbound zone transfers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#mname AccountDnsSettings#mname}

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.refresh"></a>

```go
Refresh *f64
```

- *Type:* *f64

Time in seconds after which secondary servers should re-check the SOA record to see if the zone has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#refresh AccountDnsSettings#refresh}

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.retry"></a>

```go
Retry *f64
```

- *Type:* *f64

Time in seconds after which secondary servers should retry queries after the primary server was unresponsive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#retry AccountDnsSettings#retry}

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.rname"></a>

```go
Rname *string
```

- *Type:* *string

The email address of the zone administrator, with the first label representing the local part of the email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#rname AccountDnsSettings#rname}

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

The time to live (TTL) of the SOA record itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.5.0/docs/resources/account_dns_settings#ttl AccountDnsSettings#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountDnsSettingsZoneDefaultsInternalDnsOutputReference <a name="AccountDnsSettingsZoneDefaultsInternalDnsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

accountdnssettings.NewAccountDnsSettingsZoneDefaultsInternalDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountDnsSettingsZoneDefaultsInternalDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId">ResetReferenceZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReferenceZoneId` <a name="ResetReferenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.resetReferenceZoneId"></a>

```go
func ResetReferenceZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput">ReferenceZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId">ReferenceZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceZoneIdInput`<sup>Optional</sup> <a name="ReferenceZoneIdInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneIdInput"></a>

```go
func ReferenceZoneIdInput() *string
```

- *Type:* *string

---

##### `ReferenceZoneId`<sup>Required</sup> <a name="ReferenceZoneId" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.referenceZoneId"></a>

```go
func ReferenceZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountDnsSettingsZoneDefaultsNameserversOutputReference <a name="AccountDnsSettingsZoneDefaultsNameserversOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

accountdnssettings.NewAccountDnsSettingsZoneDefaultsNameserversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountDnsSettingsZoneDefaultsNameserversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountDnsSettingsZoneDefaultsOutputReference <a name="AccountDnsSettingsZoneDefaultsOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

accountdnssettings.NewAccountDnsSettingsZoneDefaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountDnsSettingsZoneDefaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns">PutInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers">PutNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa">PutSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames">ResetFlattenAllCnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns">ResetFoundationDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns">ResetInternalDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider">ResetMultiProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers">ResetNameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl">ResetNsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides">ResetSecondaryOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa">ResetSoa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode">ResetZoneMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalDns` <a name="PutInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns"></a>

```go
func PutInternalDns(value AccountDnsSettingsZoneDefaultsInternalDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putInternalDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDns">AccountDnsSettingsZoneDefaultsInternalDns</a>

---

##### `PutNameservers` <a name="PutNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers"></a>

```go
func PutNameservers(value AccountDnsSettingsZoneDefaultsNameservers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putNameservers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameservers">AccountDnsSettingsZoneDefaultsNameservers</a>

---

##### `PutSoa` <a name="PutSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa"></a>

```go
func PutSoa(value AccountDnsSettingsZoneDefaultsSoa)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoa">AccountDnsSettingsZoneDefaultsSoa</a>

---

##### `ResetFlattenAllCnames` <a name="ResetFlattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFlattenAllCnames"></a>

```go
func ResetFlattenAllCnames()
```

##### `ResetFoundationDns` <a name="ResetFoundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetFoundationDns"></a>

```go
func ResetFoundationDns()
```

##### `ResetInternalDns` <a name="ResetInternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetInternalDns"></a>

```go
func ResetInternalDns()
```

##### `ResetMultiProvider` <a name="ResetMultiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetMultiProvider"></a>

```go
func ResetMultiProvider()
```

##### `ResetNameservers` <a name="ResetNameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNameservers"></a>

```go
func ResetNameservers()
```

##### `ResetNsTtl` <a name="ResetNsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetNsTtl"></a>

```go
func ResetNsTtl()
```

##### `ResetSecondaryOverrides` <a name="ResetSecondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSecondaryOverrides"></a>

```go
func ResetSecondaryOverrides()
```

##### `ResetSoa` <a name="ResetSoa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetSoa"></a>

```go
func ResetSoa()
```

##### `ResetZoneMode` <a name="ResetZoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.resetZoneMode"></a>

```go
func ResetZoneMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns">InternalDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers">Nameservers</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa">Soa</a></code> | <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput">FlattenAllCnamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput">FoundationDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput">InternalDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput">MultiProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput">NameserversInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput">NsTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput">SecondaryOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput">SoaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput">ZoneModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames">FlattenAllCnames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns">FoundationDns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider">MultiProvider</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl">NsTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides">SecondaryOverrides</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode">ZoneMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalDns`<sup>Required</sup> <a name="InternalDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDns"></a>

```go
func InternalDns() AccountDnsSettingsZoneDefaultsInternalDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsInternalDnsOutputReference">AccountDnsSettingsZoneDefaultsInternalDnsOutputReference</a>

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameservers"></a>

```go
func Nameservers() AccountDnsSettingsZoneDefaultsNameserversOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsNameserversOutputReference">AccountDnsSettingsZoneDefaultsNameserversOutputReference</a>

---

##### `Soa`<sup>Required</sup> <a name="Soa" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soa"></a>

```go
func Soa() AccountDnsSettingsZoneDefaultsSoaOutputReference
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference">AccountDnsSettingsZoneDefaultsSoaOutputReference</a>

---

##### `FlattenAllCnamesInput`<sup>Optional</sup> <a name="FlattenAllCnamesInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnamesInput"></a>

```go
func FlattenAllCnamesInput() interface{}
```

- *Type:* interface{}

---

##### `FoundationDnsInput`<sup>Optional</sup> <a name="FoundationDnsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDnsInput"></a>

```go
func FoundationDnsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalDnsInput`<sup>Optional</sup> <a name="InternalDnsInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalDnsInput"></a>

```go
func InternalDnsInput() interface{}
```

- *Type:* interface{}

---

##### `MultiProviderInput`<sup>Optional</sup> <a name="MultiProviderInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProviderInput"></a>

```go
func MultiProviderInput() interface{}
```

- *Type:* interface{}

---

##### `NameserversInput`<sup>Optional</sup> <a name="NameserversInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nameserversInput"></a>

```go
func NameserversInput() interface{}
```

- *Type:* interface{}

---

##### `NsTtlInput`<sup>Optional</sup> <a name="NsTtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtlInput"></a>

```go
func NsTtlInput() *f64
```

- *Type:* *f64

---

##### `SecondaryOverridesInput`<sup>Optional</sup> <a name="SecondaryOverridesInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverridesInput"></a>

```go
func SecondaryOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `SoaInput`<sup>Optional</sup> <a name="SoaInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.soaInput"></a>

```go
func SoaInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneModeInput`<sup>Optional</sup> <a name="ZoneModeInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneModeInput"></a>

```go
func ZoneModeInput() *string
```

- *Type:* *string

---

##### `FlattenAllCnames`<sup>Required</sup> <a name="FlattenAllCnames" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.flattenAllCnames"></a>

```go
func FlattenAllCnames() interface{}
```

- *Type:* interface{}

---

##### `FoundationDns`<sup>Required</sup> <a name="FoundationDns" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.foundationDns"></a>

```go
func FoundationDns() interface{}
```

- *Type:* interface{}

---

##### `MultiProvider`<sup>Required</sup> <a name="MultiProvider" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.multiProvider"></a>

```go
func MultiProvider() interface{}
```

- *Type:* interface{}

---

##### `NsTtl`<sup>Required</sup> <a name="NsTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.nsTtl"></a>

```go
func NsTtl() *f64
```

- *Type:* *f64

---

##### `SecondaryOverrides`<sup>Required</sup> <a name="SecondaryOverrides" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.secondaryOverrides"></a>

```go
func SecondaryOverrides() interface{}
```

- *Type:* interface{}

---

##### `ZoneMode`<sup>Required</sup> <a name="ZoneMode" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.zoneMode"></a>

```go
func ZoneMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccountDnsSettingsZoneDefaultsSoaOutputReference <a name="AccountDnsSettingsZoneDefaultsSoaOutputReference" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-cloudflare-go/cloudflare/v13/accountdnssettings"

accountdnssettings.NewAccountDnsSettingsZoneDefaultsSoaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccountDnsSettingsZoneDefaultsSoaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput">ExpireInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput">MinTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput">MnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput">RefreshInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput">RetryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput">RnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire">Expire</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl">MinTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname">Mname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh">Refresh</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry">Retry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname">Rname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireInput`<sup>Optional</sup> <a name="ExpireInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expireInput"></a>

```go
func ExpireInput() *f64
```

- *Type:* *f64

---

##### `MinTtlInput`<sup>Optional</sup> <a name="MinTtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtlInput"></a>

```go
func MinTtlInput() *f64
```

- *Type:* *f64

---

##### `MnameInput`<sup>Optional</sup> <a name="MnameInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mnameInput"></a>

```go
func MnameInput() *string
```

- *Type:* *string

---

##### `RefreshInput`<sup>Optional</sup> <a name="RefreshInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refreshInput"></a>

```go
func RefreshInput() *f64
```

- *Type:* *f64

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retryInput"></a>

```go
func RetryInput() *f64
```

- *Type:* *f64

---

##### `RnameInput`<sup>Optional</sup> <a name="RnameInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rnameInput"></a>

```go
func RnameInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `Expire`<sup>Required</sup> <a name="Expire" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.expire"></a>

```go
func Expire() *f64
```

- *Type:* *f64

---

##### `MinTtl`<sup>Required</sup> <a name="MinTtl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.minTtl"></a>

```go
func MinTtl() *f64
```

- *Type:* *f64

---

##### `Mname`<sup>Required</sup> <a name="Mname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.mname"></a>

```go
func Mname() *string
```

- *Type:* *string

---

##### `Refresh`<sup>Required</sup> <a name="Refresh" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.refresh"></a>

```go
func Refresh() *f64
```

- *Type:* *f64

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.retry"></a>

```go
func Retry() *f64
```

- *Type:* *f64

---

##### `Rname`<sup>Required</sup> <a name="Rname" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.rname"></a>

```go
func Rname() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.accountDnsSettings.AccountDnsSettingsZoneDefaultsSoaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



